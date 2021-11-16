const express = require('express');
const router = express.Router();
const { getBookingByVendor, getBookingDetail, updateBooking } = require('../controllers/vendorBookingController');
const {validateCreateBooking} = require('../validation/createBookingCompanyValidation');
const {vendorUserOnly} = require('../middleware/auth');

router.route('/list/:id').get(vendorUserOnly, getBookingByVendor);
router.route('/detail/:id').get(vendorUserOnly, getBookingDetail).put(updateBooking);

module.exports = router;