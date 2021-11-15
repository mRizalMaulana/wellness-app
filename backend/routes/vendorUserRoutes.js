const express = require('express');
const router = express.Router();
const { getVendorUsers, storeVendorUser, login } = require('../controllers/vendorUserController');
const {validateCreateVendorUser} = require('../validation/createVendorUserValidation');
const {validateLogin} = require('../validation/loginValidation');

router.route('/').get(getVendorUsers);
router.route('/create').post(validateCreateVendorUser, storeVendorUser);
router.route('/login').post(validateLogin, login);

module.exports = router;