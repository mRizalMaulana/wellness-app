const express = require('express');
const router = express.Router();
const { getEvents, storeEvent } = require('../controllers/eventController');
const {validateCreateEvent} = require('../validation/createEventValidation');
const {companyUserOnly} = require('../middleware/auth');

router.route('/').get(companyUserOnly, getEvents);
router.route('/create').post(validateCreateEvent, storeEvent);

module.exports = router;