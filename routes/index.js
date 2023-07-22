const homeController= require('../controllers/home_controller')
const express = require('express')
const router = express.Router()
router.get('/',homeController.home)
module.exports=router