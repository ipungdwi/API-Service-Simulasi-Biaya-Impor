require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const simulasiBiayaRoutes = require('./routes/simulasiBiayaRoutes');
const swaggerSpecs = require('./config/swaggerConfig');

const app = express();


app.use(bodyParser.json());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      message: 'Invalid JSON',
      error: err.message
    });
  }
  next();
});

app.use('/api', simulasiBiayaRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));



const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
