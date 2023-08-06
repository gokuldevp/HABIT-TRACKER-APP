const express =  require('express');
const router = express.Router();

// const homeController = require("../controller/home_controllers");


router.get("/", (req, res)=>{
    res.end('<h1>working</h1');
});
// router.use('/users', require('./users_router'));



module.exports = router;