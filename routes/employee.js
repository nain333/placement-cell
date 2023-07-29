const express = require('express');
const router = express.Router();
const passport = require('passport');

const employeesController = require('../controllers/employeeController');

router.get('/sign-in', employeesController.signIn);
router.get('/sign-up', employeesController.signUp);
router.post('/signup/create', employeesController.createEmployee);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/employee/sign-in'}
), employeesController.createSession);
router.get('/logout', employeesController.destroySession);

router.use('/dashboard', require('./dashboard'));

module.exports = router;