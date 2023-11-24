require('dotenv').config();

const { app } = require('./server');

app.listen(3500, () => {
    console.log("Server is running!");
});