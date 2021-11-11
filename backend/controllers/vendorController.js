const asyncHandler = require('express-async-handler');
const Vendor = require('../models/vendor');

const getVendors = asyncHandler(async (req, res) => {
    const vendors =  await Vendor.find();

    res.json(vendors);
});

const storeVendor = asyncHandler(async (req, res) => {
    const { name, phone, email, address } = req.body;
    
    const isVendorWithThisEmailExists = await Vendor.findOne({email});
    const isVendorWithThisNameExists = await Vendor.findOne({name}); 

    if (isVendorWithThisEmailExists || isVendorWithThisNameExists) {
        res.status(400).json({ status:false, message: 'Vendor already exists' });
    } else {
        const vendor = new Vendor({ name, phone, email, address });
        vendor.save();
        res.status(201).json({ status: true, message: 'Vendor created' });
    }
        
});

module.exports = { getVendors, storeVendor }; 