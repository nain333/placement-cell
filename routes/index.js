const homeController= require('../controllers/home_controller')
const express = require('express')
const router = express.Router()
router.get('/',homeController.home)
router.use('/employee',require('./employee'))
module.exports=router