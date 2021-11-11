const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "event"
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
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('booking', bookingSchema);