const {check, validationResult} = require('express-validator');

exports.validateLogin = [
    check('email', 'Please add a valid email').isEmail(),
    check('password', 'Please add password').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({message: errors.array()[0].msg})
        }

        next();
    },
  ];