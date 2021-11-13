const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const companyUserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    company :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companies',
        required: true
    }
});

companyUserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('company_user', companyUserSchema);