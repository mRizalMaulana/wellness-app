const asyncHandler = require('express-async-handler');
const Company = require('../models/company');

const getCompanies = asyncHandler(async (req, res) => {
    const companies =  await Company.find();

    res.json(companies);
});

const storeCompany = asyncHandler(async (req, res) => {
    const { name, phone, email, address } = req.body;
    
    const isCompanyWithThisEmailExists = await Company.findOne({email});
    const isCompanyWithThisNameExists = await Company.findOne({name}); 

    if (isCompanyWithThisEmailExists || isCompanyWithThisNameExists) {
        res.status(400).json({ status:false, message: 'Company already exists' });
    } else {
        const company = new Company({ name, phone, email, address });
        company.save();
        res.status(201).json({ status: true, message: 'Company created' });
    }
        
});

module.exports = { getCompanies, storeCompany }; 