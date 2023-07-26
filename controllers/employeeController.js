const Employee = require("../models/employee")

module.exports.signUp=function(req,res){
    return res.render('sign_up',{
        title:'Sign Up | Placement Cell'
    })
}
module.exports.signIn=function(req,res){
    res.render('sign_in',{
        title:'Sign In | Placement Cell'
    })
}
module.exports.createEmployee=async function(req,res){
    try{
        // find if the employee is already present in databses associated with requested email
        const emp = await Employee.findOne({
            email:req.body.email
        })
        console.log("Employee in db :: ",emp)
        // if employee found , tell user is registered
        if(emp){
            return res.send('<h1>User is already registered with this email.<h1>')

        }
        // if employee is not registered create the employee in database
        console.log('email in req body :',req.body.email)
        console.log('name in body request:',req.body.name)
        console.log('Request.body in createEmployee: ',req.body)
        const domain = req.body.email.split('@')[1];
        // check if email domain is @codingninjas.com
        if(domain.toLowerCase()!=='codingninjas.com'){
            console.log("user is not athorized to sign up!")
            return res.send('<h1>User is not authorized to sign up! <a href="/employee/sign-up">Return to sign Up<a></h1>')
        }
        if(req.body.password==req.body.confirm_password){
        Employee.create({
            name:req.body.name,
            email:req.body.email, 
            password:req.body.password,
            
        })
        return res.redirect('/employee/sign-in')
    }
    else{
        res.send('password and confirm password do not match! <a href="/employee/sign-up">return to sign up</a>')
    }

    }catch(error){
        console.log("Error in creating Employee: ",error)
    }
}
// Redirect a successful sign-in to dashboard
module.exports.createSession= function(req,res){
    console.log('inside createSession')
    res.redirect('/employee/dashboard')
}
// Render dashboard page
module.exports.dashboard=function(req,res){
    res.render('dashboard',{
        title:'Dashboard | Placement Cell'
    })
}