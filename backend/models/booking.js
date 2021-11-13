const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "events",
        required: true
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vendors",
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "companies",
        required: true
    },
    location: {
        type: String,
        required: true
    },
    proposed_date_1: {
        type: Date,
        required: true,  
    },
    proposed_date_2: {
        type: Date,
        required: true,  
    },
    proposed_date_3: {
        type: Date,
        required: true,  
    },
    is_reject: {
        type: Boolean,
        default:false
    },
    reject_reason: {
        type: String,
        default: null
    },
    confirmed_date: {
        type: Date,
        default: null
    }
}, { timestamps: true });

module.exports = mongoose.model('booking', bookingSchema);