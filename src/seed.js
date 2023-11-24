require('dotenv').config();

const { default: mongoose } = require('mongoose');
const { databaseConnect } = require('./mongooseConnector');

databaseConnect().then(async () => {
    console.log("Creating seed data!");

    const Booking = mongoose.model('Booking', {
        name: String,
        email: String,
        phoneNumber: String,
        bookingSize: Number,
        specialRequirements: String
    });

    let newBooking = new Booking({
        name: "Test Diner",
        email: "hungrydiner@foodie.com.au",
        phoneNumber: "1234567890",
        bookingSize: 8,
        specialRequirements: "one baby seat please"
    })

    await newBooking.save().then(() => {
        console.log("Test Booking is in the DB!");
    });


});