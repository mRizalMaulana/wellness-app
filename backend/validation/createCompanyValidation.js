const {check, validationResult} = require('express-validator');

exports.validateCreateCompany = [
    check('name', 'Please add company name').not().isEmpty(),
    check('phone', 'Please add phone').not().isEmpty(),
    check('email', 'Please add a valid email').isEmail(),
    check('address', 'Please add address').not().isEmpty(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({errors: errors.array()});
      next();
    },
  ];