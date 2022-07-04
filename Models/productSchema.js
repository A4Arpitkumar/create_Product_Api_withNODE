const mongoose = require('mongoose');

const  userSchema = new mongoose.Schema({
    product_name : {
        type : String
    },
    product_image : {
        type : String
    },
    product_price : {
        type : String
    },
    product_description : {
        type : String
    }
})

const UserProduct =  mongoose.model("UserProduct",userSchema);

module.exports = UserProduct;