const express = require('express')
const passport =require('passport')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
router.get('/sign-up',employeeController.signUp)
router.get('/sign-in',employeeController.signIn)
router.get('/dashboard',passport.checkAuthentication,employeeController.dashboard)
router.post('/create',employeeController.createEmployee)
router.post('/create-session',(req,res,next)=>{
    console.log("request body inside the routes: ",req.body)
    next()
},passport.authenticate('local'),employeeController.createSession)

module.exports=router
