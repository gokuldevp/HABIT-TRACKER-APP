const express = require('express');
const router = express.Router();
const detailsController = require('../controllers/details_controller');

router.get('/home', detailsController.home);

router.get('/add-habit', detailsController.addHabit);

router.post('/create-habit', detailsController.createHabit);


module.exports = router;