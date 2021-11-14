const asyncHandler = require('express-async-handler');
const Booking = require('../models/booking');

const getBookingByCompany = asyncHandler(async (req, res) => {
    const company = req.params.id;
    const bookings =  await Booking.find({ company }).populate('event').populate('vendor').populate('company');

    res.json(bookings);
});

const storeBooking = asyncHandler(async (req, res) => {
    const { event, vendor, company, location, proposed_date_1, proposed_date_2, proposed_date_3 } = req.body;
    
    const booking = new Booking({event, vendor, company, location, proposed_date_1, proposed_date_2, proposed_date_3});
    booking.save();
    res.status(201).json({ status: true, message: 'Booking created' });        
});

module.exports = { getBookingByCompany, storeBooking }; 