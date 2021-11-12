const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const companySchema = mongoose.Schema({
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

companySchema.plugin(uniqueValidator);
module.exports = mongoose.model('companies', companySchema);