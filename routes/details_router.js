const express = require('express');
const router = express.Router();
const detailsController = require('../controllers/details_controller');

router.get('/day:dayName', detailsController.detailsView);

router.get('/add-habit', detailsController.addHabit);

router.get('/weekly-view', detailsController.weeklyView);

router.post('/create-habit', detailsController.createHabit);

router.post('/update-status', detailsController.updateStatus);

module.exports = router;