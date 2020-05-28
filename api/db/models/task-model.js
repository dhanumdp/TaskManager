const mongoose = require('mongoose');

const Task=  mongoose.model('Task',{
    title:{
        type: String,
        required : true,
        minlength:1,
        trim:true
    },
    listId:
    {
        type : mongoose.Types.ObjectId,
        required:true
    }

},'Tasks')


module.exports={Task}