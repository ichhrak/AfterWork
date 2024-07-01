const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    role:{
        type: String,
        enum: ['Admin', 'Customer', 'Seller'],
        default: 'Customer',
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User;