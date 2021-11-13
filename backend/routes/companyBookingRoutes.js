const express = require('express');
const router = express.Router();
const { getBooking, storeBooking } = require('../controllers/companyBookingController');
const {validateCreateBooking} = require('../validation/createBookingCompanyValidation');
const {companyUserOnly} = require('../middleware/auth');

router.route('/').get(companyUserOnly, getBooking);
router.route('/create').post(companyUserOnly, validateCreateBooking, storeBooking);

module.exports = router;