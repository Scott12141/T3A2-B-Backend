require('dotenv').config();

const { databaseConnect } = require('./mongooseConnector');
const { app } = require('./server');

app.listen(3500, async () => {
    await databaseConnect();
    console.log("Server is running!");
});