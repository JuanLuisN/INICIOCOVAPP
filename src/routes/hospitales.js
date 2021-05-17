const express = require('express');
const router = express.Router();
const hospController = require('../controllers/hospController');


//hosp routes
router.get('/hospitales', hospController.list);


module.exports = router;