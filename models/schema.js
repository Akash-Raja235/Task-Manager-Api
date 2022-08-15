


const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'name must be required'],
        maxlength:[20, 'name must be less than 20 characters'],
        trim:true
    }, 
    completed:{

        default:false,
        type:Boolean

    }
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;