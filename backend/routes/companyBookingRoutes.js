const express = require('express');
// const { login } = require('../controllers/companyUserController');
const router = express.Router();

router.route('/create').post(login);

module.exports = router;