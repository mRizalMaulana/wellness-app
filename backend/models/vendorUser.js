const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const vendorUserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    vendor :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendors'
    }
}, { timestamps: true });

vendorUserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('vendor_users', vendorUserSchema);