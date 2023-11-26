const express = require('express');
const { Booking } = require('../models/BookingModel');
const router = express.Router();

router.get("/all", async (request, response) => {
    let result = await Booking.find({});

    response.json({
        bookings: result
    });
});

router.get("/multiple/date/findBookingsByDate", async (request, response) => {
    let result = null

    response.json({
        bookings: result
    });
});

//POST new booking to DB
router.post("/", async (request, response) => {
    let result = await Booking.create(request.body);

    response.json({
        bookings: result
    });
});

router.delete("/:id", async (request, response) => {
    let result = null

    response.json({
        bookings: result
    });
});


module.exports = router;