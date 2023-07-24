const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
router.get('/sign-up',employeeController.signUp)
router.get('/sign-in',employeeController.signIn)
router.get('/dashboard',employeeController.dashboard)
router.post('/create',employeeController.createEmployee)
router.post('/create-session',employeeController.createSession)

module.exports=router
