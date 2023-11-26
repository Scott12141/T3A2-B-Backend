const express = require('express');

const app = express();


app.get("/", (request, response) => {
    response.json({
        message:"Hello World!"
    });
});

const BookingRouter = require('./controllers/BookingController');
app.use('/bookings', BookingRouter);

module.exports = {
    app
}