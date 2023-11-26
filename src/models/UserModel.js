const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
        unique: false
    }
    
});


UserSchema.pre(
    'save',
    async function (next){
        console.log("Saving user to the DB.");
        next();
    }
);


const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}