const express = require('express');
const router = express.Router();
const { getBookingByCompany, getBookingDetail, storeBooking } = require('../controllers/companyBookingController');
const {validateCreateBooking} = require('../validation/createBookingCompanyValidation');
const {companyUserOnly} = require('../middleware/auth');

router.route('/list/:id').get(companyUserOnly, getBookingByCompany);
router.route('/detail/:id').get(companyUserOnly, getBookingDetail);
router.route('/create').post(companyUserOnly, validateCreateBooking, storeBooking);

module.exports = router;