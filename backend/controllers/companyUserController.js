const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const CompanyUser = require('../models/companyUser');
const Company =require('../models/company');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const storeCompanyUser = asyncHandler(async (req, res) => {
    const { name, email, password, company } = req.body;

    const companyId  = new mongoose.Types.ObjectId(company);

    const getCompany = await Company.findById(companyId);

    if (!getCompany) {
        res.status(400).json({ status:false, message: "Company doesn't exists" });
    }

    const companyUser = new CompanyUser({ name, email, password, company });
    const salt = await bcrypt.genSalt(10);
    companyUser.password = await bcrypt.hash(password, salt);
    companyUser.save();
    res.status(201).json({ status: true, message: 'Company User created' });
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await CompanyUser.findOne({ email }).populate('company');

    if (!user) {
        return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
        user: { 
            id: user._id
        }
    }

    jwt.sign(payload, 'secret', {
        expiresIn: '30d'
    }, (err, token) => {
        if(err) throw err;
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,   
            token: token,
            company_id: user.company._id,
            company_name: user.company.name 
        });
    });

});

module.exports = { storeCompanyUser, login }; 