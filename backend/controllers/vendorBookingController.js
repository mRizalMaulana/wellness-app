const asyncHandler = require('express-async-handler');
const Booking = require('../models/booking');

const getBookingByVendor = asyncHandler(async (req, res) => {
    const vendor = req.params.id;
    const bookings =  await Booking.find({ vendor }).populate('event').populate('vendor').populate('company');

    res.json(bookings);
});

const getBookingDetail = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const booking =  await Booking.findById(id).populate('event').populate('vendor').populate('company');

    res.json(booking);
});

const updateBooking = asyncHandler(async (req, res) => {
    const { is_reject , reject_reason , confirmed_date } = req.body;
  
    const booking = await Booking.findById(req.params.id);
  
    if (!booking) {
        res.status(404);
        throw new Error("Note not found");
    }

    booking.is_reject = is_reject;

    if (reject_reason) {
        booking.reject_reason = reject_reason;
    }

    if (confirmed_date) {
        booking.confirmed_date = confirmed_date;
    }

    booking.save(); 
    res.status(201).json({ status: true, message: 'Booking Updated' });
  });

module.exports = { getBookingByVendor, getBookingDetail, updateBooking }; 