const express = require('express');
const { Booking } = require('../models/BookingModel');
const router = express.Router();

router.get("/all", async (request, response) => {
    let result = await Booking.find({});

    response.json({
        bookings: result
    });
});

module.exports = router;