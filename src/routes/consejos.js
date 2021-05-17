const express = require('express');
const router = express.Router();
const consejosController = require('../controllers/consejosController');


//consejos routes
router.get('/consejos', consejosController.list);


module.exports = router;