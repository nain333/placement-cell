const mongoose = require('mongoose')
const resultSchema = new mongoose.Schema({
    student:{
        type:mongoose.Schema.types.ObjectId,
        ref:'User'
    },
    result:{
        type:String,
        enum:['Pass','Fail','On Hold',"Didn't Attempt"],
        required:true


    }

},{
    timestamps:true
})
const Result = mongoose.model('Result',resultSchema)
module.exports = Result