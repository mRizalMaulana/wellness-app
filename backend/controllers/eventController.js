const asyncHandler = require('express-async-handler');
const Event = require('../models/event');

const getEvents = asyncHandler(async (req, res) => {
    const events =  await Event.find();

    res.json(events);
});

const storeEvent = asyncHandler(async (req, res) => {
    const { name } = req.body;
    
    const isEventWithThisNameExists = await Event.findOne({name}); 

    if (isEventWithThisNameExists) {
        res.status(400).json({ status:false, message: 'Event already exists' });
    } else {
        const event = new Event({ name });
        event.save();
        res.status(201).json({ status: true, message: 'Event created' });
    }
        
});

module.exports = { getEvents, storeEvent }; 