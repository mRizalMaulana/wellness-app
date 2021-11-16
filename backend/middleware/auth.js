const jwt = require('jsonwebtoken');
const CompanyUser = require('../models/companyUser');
const VendorUser = require('../models/vendorUser');
const asyncHandler = require('express-async-handler');

const companyUserOnly = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, 'secret');

      req.user = await CompanyUser.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});

const vendorUserOnly = asyncHandler(async (req, res, next) => {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
  
        //decodes token id
        const decoded = jwt.verify(token, 'secret');
  
        req.user = await VendorUser.findById(decoded.id).select("-password");
  
        next();
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized");
      }
    }
  
    if (!token) {
      res.status(401);
      throw new Error("Not authorized");
    }
  });

module.exports = { companyUserOnly, vendorUserOnly };