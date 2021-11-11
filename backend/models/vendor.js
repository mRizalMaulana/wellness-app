const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const vendorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true });

vendorSchema.plugin(uniqueValidator);
module.exports = mongoose.model('vendors', vendorSchema);