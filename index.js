const express = require('express')
const port = 5000
const app = express()
const path = require('path')
const expressLayouts= require('express-ejs-layouts')
const nodeSass=require('node-sass-middleware')
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
app.use(express.static('./assets'))
// use node-sass-middlware
app.use(nodeSass({
    src:'./assets/scss',
    dest:'./assets/css',
    outputStyle:'extended',
    debug:true,
    prefix:'/css'
}))
// set up routes in the root index
app.use('/',require('./routes'))
// listen to the port 
app.listen(port,(err)=>{
    if(err){
        console.log(`Error in starting the server: ${err}`)
    }
    console.log(`Server is running on port: ${port}`)
})