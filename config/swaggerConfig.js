// config/swaggerConfig.js

const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simulasi Biaya Impor API',
      version: '1.0.0',
      description: 'API untuk simulasi biaya impor'
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Local server'
      }
    ],
  },
  apis: ['./routes/*.js', './docs/*.js'], // Path ke file routes dan anotasi
};

const specs = swaggerJSDoc(options);

module.exports = specs;
