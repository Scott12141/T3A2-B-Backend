const mongoose = require('mongoose');

// Connect or create and connect to a database.
async function databaseConnect(){
    try {
        // DB connection can take some time, so we have an await for this purpose
        await mongoose.connect('mongodb://localhost:27017/tmdbDB');
        console.log("Database connected");
    } catch (error) {
        console.warn(`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`);
    }
}

module.exports = {
    databaseConnect
}