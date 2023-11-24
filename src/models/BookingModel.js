const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: false
    },
    bookingSize: {
        type: Number,
        required: true,
        unique: false
    },
    specialRequirements: {
        type: String,
        required: false,
    }

});


const Booking = mongoose.model('Booking', BookingSchema);

module.exports = {
    Booking
}