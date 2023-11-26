require('dotenv').config();


const { databaseConnect } = require('./mongooseConnector');
const { Booking } = require('./models/BookingModel');
const { User } = require('./models/UserModel');

databaseConnect().then(async () => {
    console.log("Creating seed data!");

    let newUser = await User.create({
        email: "testuser@testing.com.au",   
        password: "abc123",     
        name: "Wendy Testaburger",
        phoneNumber: "1234567890",
        address: "123 Hungry St. Town"
    });

    let newBooking = new Booking({
        user: newUser._id,
        date: "2023/11/25",
        name: "Test user booking",
        email: "hungrydiner@foodie.com.au",
        phoneNumber: "1234567890",
        bookingSize: 20,
        specialRequirements: "one baby seat please"
    })

    await newBooking.save().then(() => {
        console.log(`${newBooking.name} is now in the DB.`);
    });

    console.log(newBooking)

});