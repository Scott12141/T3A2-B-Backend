require('dotenv').config();

const { databaseConnect } = require('./mongooseConnector');
const { app } = require('./server');

const PORT = process.env.PORT || 3500;

app.listen(PORT, async () => {
    await databaseConnect();
    console.log("Server is running!");
});