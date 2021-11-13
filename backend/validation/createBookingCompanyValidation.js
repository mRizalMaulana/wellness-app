const {check, validationResult} = require('express-validator');

exports.validateCreateBooking = [
    check('event', 'Please select event').not().isEmpty(),
    check('vendor', 'Please select vendor').not().isEmpty(),
    check('company', 'Company not found!').not().isEmpty(),
    check('location', 'Please add location address').not().isEmpty(),
    check('proposed_date_1', 'Please add proposed date 1').not().isEmpty(),
    check('proposed_date_2', 'Please add proposed date 2').not().isEmpty(),
    check('proposed_date_3', 'Please add proposed date 3').not().isEmpty(),
    
    (req, res, next) => {
      const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({message: errors.array()[0].msg})
        }

    next();
    },
  ];