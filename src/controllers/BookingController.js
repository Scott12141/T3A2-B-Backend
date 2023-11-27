const express = require('express');
const { Booking } = require('../models/BookingModel');
const router = express.Router();

//GET all bookings from DB
router.get("/all", async (request, response) => {
    let result = await Booking.find({}).catch(error => {return error});

    response.json({
        bookings: result
    });
});

// router.get("/multiple/date/findBookingsByDate", async (request, response) => {
//     let result = null

//     response.json({
//         bookings: result
//     });
// });

//POST new booking to DB
router.post("/", async (request, response) => {
    let result = await Booking.create(request.body).catch(error => {return error});

    response.json({
        bookings: result
    });
});

//Delete single booking from DB
router.delete("/:id", async (request, response) => {
    let result = await Booking.findByIdAndDelete(request.params.id);

    response.json({
        deletedBooking: result
    });
});


module.exports = router;