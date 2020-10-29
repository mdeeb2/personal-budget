const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        minlength: 7,
        maxlength: 7 //max length of 7 as hexadecimal format #ffffff is 7 characters long in string but is the 6 digit hexadecimal format
    }
}, { collection: 'items' });

module.exports = mongoose.model("items", budgetSchema);