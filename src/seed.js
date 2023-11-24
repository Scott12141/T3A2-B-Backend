require('dotenv').config();

const { default:mongoose}  = require('mongoose');
const { databaseConnect } = require('./mongooseConnector');
const { Booking } = require('./models/BookingModel');

databaseConnect().then(async () => {
    console.log("Creating seed data!");

    let newBooking = new Booking({
        date: "2023/11/25",
        name: "Test Date",
        email: "hungrydiner@foodie.com.au",
        phoneNumber: "1234567890",
        bookingSize: 20,
        specialRequirements: "one baby seat please"
    })

    await newBooking.save().then(() => {
        console.log(`${newBooking.name} is now in the DB.`);
    });


});