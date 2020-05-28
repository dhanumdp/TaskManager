const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager',{useNewUrlParser:true}).then(()=>{
    console.log('Database Connected');
}).catch((err)=>{
    console.log('Error while connecting Database '+err);
})


mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify', true);

module.exports = {mongoose};