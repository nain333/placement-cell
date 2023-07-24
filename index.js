const express = require('express')
const db = require('./config/mongoose')
const port = 5000
const app = express()
const path = require('path')
const expressLayouts= require('express-ejs-layouts')
const nodeSass=require('node-sass-middleware')
const session = require('express-session')
const passport=require('passport')
const passportLocal=require('./config/passport-local-streategy')
const bodyParser=require('body-parser')
// set up view engine
app.set('view engine','ejs')
// set up view folder
app.set('views',path.join( __dirname,'views'))
// use express-ejs-layouts
app.use(expressLayouts)
// extracts styles and scripts from the subpages in layout.
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)
// set up folder for the static files
app.use(express.static(path.join( __dirname,'assets')))
// use node-sass-middlware
app.use(nodeSass({
    src:'./assets/scss',
    dest:'./assets/css',
    outputStyle:'extended',
    debug:true,
    prefix:'/css'
}))
// set-up the express-session
app.use(session({
    name:'placement-app',
    secret:'get-placed-soon-and-get-paid-well',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:1000*60*15
    }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setAuthenticatedUser)
app.use(bodyParser.urlencoded({extended: true}));

// set up routes in the root index
app.use('/',require('./routes'))
// listen to the port 
app.listen(port,(err)=>{
    if(err){
        console.log(`Error in starting the server: ${err}`)
    }
    console.log(`Server is running on port: ${port}`)
})