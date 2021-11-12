const express = require('express');
const router = express.Router();
const { getCompanies, storeCompany } = require('../controllers/companyController');
const {validateCreateCompany} = require('../validation/createCompanyValidation');

router.route('/').get(getCompanies);
router.route('/create').post(validateCreateCompany, storeCompany);

module.exports = router;