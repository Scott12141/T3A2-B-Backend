const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: String,
        required: true,
        unique: false
    },
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
    }

});


const Booking = mongoose.model('Booking', BookingSchema);

module.exports = {
    Booking
}