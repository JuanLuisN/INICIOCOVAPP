const express = require('express');
const router = express.Router();
const casosController = require('../controllers/casosController');
const hospController = require('../controllers/hospController');
const vacunasController = require('../controllers/vacunasController');
const consejosController = require('../controllers/consejosController');


//cases routes
router.get('/', casosController.list);
router.get('/hospitales', hospController.list);
router.get('/vacunas', vacunasController.list);
router.get('/consejos', consejosController.list);

module.exports = router;