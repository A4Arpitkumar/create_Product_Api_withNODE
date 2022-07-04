const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require:true
    },
    con_password : {
        type : String,
        require:true
    }
});

const UserRegistration = mongoose.model("UserRegistration",userSchema);

module.exports = UserRegistration;

