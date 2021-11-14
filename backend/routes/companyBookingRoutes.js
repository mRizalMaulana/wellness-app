const express = require('express');
const router = express.Router();
const { getBookingByCompany, storeBooking } = require('../controllers/companyBookingController');
const {validateCreateBooking} = require('../validation/createBookingCompanyValidation');
const {companyUserOnly} = require('../middleware/auth');

router.route('/list/:id').get(companyUserOnly, getBookingByCompany);
router.route('/create').post(companyUserOnly, validateCreateBooking, storeBooking);

module.exports = router;