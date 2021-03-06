const {check, validationResult} = require('express-validator');

exports.validateCreateVendorUser = [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please add a valid email').isEmail(),
    check('password', 'Please add password').not().isEmpty(),
    check('vendor', 'Please add vendor').not().isEmpty(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({errors: errors.array()});
      next();
    },
  ];