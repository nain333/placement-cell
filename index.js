const express = require('express')
const port = 5000
const app = express()
app.listen(port,(err)=>{
    if(err){
        console.log(`Error in starting the server: ${err}`)
    }
    console.log(`Server is running on port: ${port}`)
})