const passport = require('passport')
const LocalStreategy= require('passport-local').Strategy
const Employee = require('../models/employee')
passport.use(new LocalStreategy(
    {
        usernameField:'email',
        passReqToCallBack:true
    },

    async function(email, password, done){
        try{
        const emp = Employee.findOne({email:email})
        if(!emp||emp.password==!password){
            console.log("Invalid credentials")
            return done(null,false)

        }
        return done(null,emp)
        

    }catch(error){
        console.log("Error in  finding User ---->> passport")
        return done(error)
    }
}


))
// serialize the emoploye to descide which key is to be kept in cookies

passport.serializeUser((emp,done)=>{
    console.log('Seriallized Employee')
    return done(null,emp.id)

})
// desirealize Emloyee
passport.deserializeUser(async (id,done)=>{
    try{
    const emp = Employee.findById(id)
    return done(null,emp)
    }catch(error){
        console.log('Error in desirializing Employee')
    }
})
// check if the employee is authenticated
passport.checkAuthentication=(req,res,next)=>{
    // if the employee is signed in pass the req to the next middleware
    if(req.isAuthenticated()){
        return next()

    }
    return res.redirect('/employee/sign-in')

}

passport.setAuthenticatedUser=(req,res,next)=>{
    if(req.isAuthenticated()){
        req.locals.emplyee=req.employee
        console.log('set authenticated User')

    }
    next()
}
module.exports= passport


