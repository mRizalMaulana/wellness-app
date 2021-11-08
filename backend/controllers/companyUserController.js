const asyncHandler = require('express-async-handler');
const CompanyUser = require('../models/companyUser');

const login = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await CompanyUser.findOne({ email });

    if (!userExists) {
        return res.status(400).json({ message: 'Invalid Credentials' });
    }

});

module.exports = { login }; 