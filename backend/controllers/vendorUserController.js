const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const VendorUser = require('../models/vendorUser');
const Vendor = require('../models/vendor');
const jwt = require('jsonwebtoken');
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

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await VendorUser.findOne({ email }).populate('vendor');

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
            vendor_id: user.vendor._id,
            vendor_name: user.vendor.name,
            type: 'vendor' 
        });
    });

});

module.exports = { getVendorUsers, storeVendorUser, login }; 