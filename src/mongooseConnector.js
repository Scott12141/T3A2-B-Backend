const mongoose = require('mongoose');

// Connect or create and connect to a database.
async function databaseConnect(){
    try {
        console.log("Connecting to: mongodb+srv:@cloudtmdbdb.8rfhvke.mongodb.net/?retryWrites=true&w=majority")
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connected");
    } catch (error) {
        console.warn(`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`);
    }
}

module.exports = {
    databaseConnect
}