const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const vendorRoutes = require('./routes/vendorRoutes');
const vendorUserRoutes = require('./routes/vendorUserRoutes');

const companyRoutes = require('./routes/companyRoutes');
const companyUserRoutes = require('./routes/companyUserRoutes');

const eventRoutes = require('./routes/eventRoutes');

const companyBookingRoutes = require('./routes/companyBookingRoutes');
const vendorBookingRoutes = require('./routes/vendorBookingRoutes');

const app = express();
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

const sample = require('./data/sample');
const { notFound, errorHandler } = require('./middleware/error');

app.get('/', (req, res) => {
    res.send("Wellness app backend is running...");
});

app.use('/api/vendor', vendorRoutes);
app.use('/api/vendor/user', vendorUserRoutes);

app.use('/api/company', companyRoutes);
app.use('/api/company/user', companyUserRoutes);

app.use('/api/event', eventRoutes);

app.use('/api/company/booking', companyBookingRoutes);
app.use('/api/vendor/booking', vendorBookingRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {err ? console.log(err) : console.log(`Server started at port ${PORT}`)});