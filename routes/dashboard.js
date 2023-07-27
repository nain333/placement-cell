const express = require('express')
const passport=require('passport')
const dashboardController=require('../controllers/dashboard_controller')
const router = express();
router.get('/',passport.checkAuthentication,dashboardController.dashboard)
module.exports=router;
