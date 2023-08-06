const express =  require('express');
const router = express.Router();

const detailsController = require('../controllers/details_controller');


router.get("/", (req, res)=>{
    res.end('<h1>working</h1');
});

router.use('/details', require('./details_router'));



module.exports = router;