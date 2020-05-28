const mongoose = require('mongoose');

const List= mongoose.model('List',{
    title:{
        type: String,
        required : true,
        minlength:1,
        trim:true
    }

},'Lists')


module.exports={List}