const express = require('express');
const router = express.Router();
const { getVendorUsers, storeVendorUser } = require('../controllers/vendorUserController');
const {validateCreateVendorUser} = require('../validation/createVendorUserValidation');

router.route('/').get(getVendorUsers);
router.route('/create').post(validateCreateVendorUser, storeVendorUser);

module.exports = router;