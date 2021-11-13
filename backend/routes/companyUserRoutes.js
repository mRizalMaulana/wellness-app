const express = require('express');
const router = express.Router();
const { storeCompanyUser, login } = require('../controllers/companyUserController');
const {validateCreateCompanyUser} = require('../validation/createCompanyUserValidation');
const {validateLogin} = require('../validation/loginValidation');

router.route('/create').post(validateCreateCompanyUser, storeCompanyUser);
router.route('/login').post(validateLogin, login);

module.exports = router;