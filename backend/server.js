const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const companyUserRoutes = require('./routes/companyUserRoutes'); 

const app = express();
dotenv.config();
connectDB();

app.use(express.json({ extended:false }));

const sample = require('./data/sample');

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Wellness app backend is running...");
});

app.get('/api/booking', (req, res) => {
    res.json(sample);
});

app.get('/api/booking/:id', (req, res) => {
    const data = sample.find((data)=> data._id === req.params.id)
    res.json(data);
});

app.use('/api/company-user', companyUserRoutes);

app.listen(PORT, (err) => {err ? console.log(err) : console.log(`Server started at port ${PORT}`)});