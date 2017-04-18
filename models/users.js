const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const UserSchema = mongoose.Schema({
    name : {
        type:String
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        require: true
    },
    password : {
        type:String,
        required:true
    }
});

const User = module.exports = mongoose.model('User',UserSchema);