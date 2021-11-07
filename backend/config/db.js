const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });

        console.log(`Mongo DB Connected: ${db.connection.host}`);
    } catch (err) {
        console.error(err.message);
        process.exit();
    }
};

module.exports = connectDB;