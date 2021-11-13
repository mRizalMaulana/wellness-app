const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const VendorUser = require('../models/vendorUser');
const Vendor = require('../models/vendor');
const bcrypt = require('bcryptjs');

const getVendorUsers = asyncHandler(async (req, res) => {
    const vendorUsers =  await VendorUser.find();

    res.json(vendorUsers);
});

const storeVendorUser = asyncHandler(async (req, res) => {
    const { name, email, password, vendor } = req.body;
    const vendorId = new mongoose.Types.ObjectId(vendor);

    const getVendor = await Vendor.findById(vendorId).exec();

    if (!getVendor) {
        res.status(400).json({ status:false, message: "Vendor doesn't exists" });
    }

    const vendorUsers = new VendorUser({ name, email, password, vendor });
    const salt = await bcrypt.genSalt(10);
    vendorUsers.password = await bcrypt.hash(password, salt);
    vendorUsers.save();
    res.status(201).json({ status: true, message: 'Vendor User created' });
});

module.exports = { getVendorUsers, storeVendorUser }; 