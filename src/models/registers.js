const mongoose = require("mongoose");

const Person_Schema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type: String,
        required:true
    },  
    username:{
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirm_password:{
        type: String,
        required: true
    }
    
})

//now creating collections

const Register = new mongoose.model("Register", Person_Schema);
module.exports = Register;