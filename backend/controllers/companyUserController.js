const asyncHandler = require('express-async-handler');
const CompanyUser = require('../models/companyUser');
const jwt = require('jsonwebtoken');

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await CompanyUser.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const isMatch = password === user.password;
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
        user: { 
            id: user._id
        }
    }

    jwt.sign(payload, 'secret', {
        expiresIn: 3600
    }, (err, token) => {
        if(err) throw err;
        res.status(200).json({
            _id: user._id,
            company_name: user.company_name,
            email: user.email,   
            token : token
        });
    });

});

module.exports = { login }; 