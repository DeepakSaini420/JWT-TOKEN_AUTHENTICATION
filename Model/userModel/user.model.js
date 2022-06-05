const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        minlength:5
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    token:{
        type:String,
    }
})

module.exports = mongoose.model('User',userSchema);