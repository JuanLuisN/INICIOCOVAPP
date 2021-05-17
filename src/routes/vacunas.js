const express = require('express');
const router = express.Router();
const vacunasController = require('../controllers/vacunasController');


//vacunas routes
router.get('/vacunas', vacunasController.list);


module.exports = router;