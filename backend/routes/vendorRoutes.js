const express = require('express');
const router = express.Router();
const { getVendors, storeVendor } = require('../controllers/vendorController');
const {validateCreateVendor} = require('../validation/createVendorValidation');

router.route('/').get(getVendors);
router.route('/create').post(validateCreateVendor, storeVendor);

module.exports = router;