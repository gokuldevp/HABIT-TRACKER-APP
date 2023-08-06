const express =  require('express');
const router = express.Router();

const detailsController = require('../controllers/details_controller');

router.get('/', detailsController.weeklyView);

router.use('/details', require('./details_router'));



module.exports = router;