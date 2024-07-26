const express = require('express');
const { createSimulasiBiaya } = require('../controllers/simulasiBiayaController');

const router = express.Router();

router.post('/simulasi-biaya', createSimulasiBiaya);

module.exports = router;
