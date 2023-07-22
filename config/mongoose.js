const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/placement-cell-development')
const db = mongoose.connection;
db.on('error',console.error.bind(console,'Error while connecting to the db'))
db.once('open',()=>{
    console.log("Successfuly connect :: mongodb://127.0.0.1:27017/placement-cell-development")
})