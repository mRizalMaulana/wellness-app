const express = require('express');
const router = express.Router();
const { getVendors, storeVendor } = require('../controllers/vendorController');
const {validateCreateVendor} = require('../validation/createVendorValidation');
const {companyUserOnly} = require('../middleware/auth');

router.route('/').get(companyUserOnly, getVendors);
router.route('/create').post(validateCreateVendor, storeVendor);

module.exports = router;