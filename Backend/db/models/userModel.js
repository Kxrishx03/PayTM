const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:5,
        maxLength:50
    },
    firstname:{
        type:String,
        required:true,
        maxLength:50
    },
    lastname:{
        type:String,
        required:true,
        maxLength:50
    },
    password:{
        type:String,
        required:true,
        minLength:6
    }
});

const User = mongoose.model('User',userSchema);
module.exports={ User };
