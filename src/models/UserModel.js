const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    },
    isEmployee: {
        type: Boolean,
        required: false,
        default: false
    }
    
});


UserSchema.pre('save', async function (next){
        const user = this;
        if (!user.isModified('password')) return next();
        const hash = await bcrypt.hash(this.password, 6);
        this.password = hash;
        console.log("Saving user to the DB.");
        next();
    }
);


const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}