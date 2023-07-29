const mongoose = require('mongoose')
const resultSchema = new mongoose.Schema({
    students:[{
        student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
        }
    }],
    result:{
        type:String,
        enum:['Pass','Fail','On Hold',"Didn't Attempt",'Registered'],
        default:'Registered',
        required:true


    },
    interview:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Interview'

    }

},{
    timestamps:true
})
const Result = mongoose.model('Result',resultSchema)
module.exports = Result
