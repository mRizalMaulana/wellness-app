const {check, validationResult} = require('express-validator');

exports.validateCreateEvent = [
    check('name', 'Please add event name').not().isEmpty(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({errors: errors.array()});
      next();
    },
  ];