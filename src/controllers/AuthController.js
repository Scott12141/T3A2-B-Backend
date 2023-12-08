const express = require('express');
const { User } = require('../models/UserModel');
const { comeparePassword, generateJwt } = require('../utilities/userAuthFunctions');
const router = express.Router();

// GET User data
router.get("/", async (request, response) => {
    let result = await User.find({});

    response.json({
        users: result
    });
});

// POST a new User to DB
router.post("/", async (request, response) => {
    
    let targetUser = await User.findOne({email: request.body.email}).catch(error => {return error});
    if (targetUser){
        return response.status(400).json({error:"Email already exists"});
    }
    
    let newUser = await User.create(request.body).catch(error => {return error});

    response.json(newUser);
});

// POST {email, password} for login
router.post("/login", async (request, response) => {
    // Find user by email provided
    let targetUser = await User.findOne({email: request.body.email}).catch(error => {return error});

    if (!targetUser){
        return response.status(403).json({error:"Invalid email, or account does not exist"});
    }

    // Compare password provided by user with that in DB
    let isPasswordCorrect = await comeparePassword(request.body.password, targetUser.password).catch(error => {return error});

    if (!isPasswordCorrect){
        return response.status(403).json({error:"You are not authorised!"});
    }

    // If user exists and password is correct - generate JWT
    let token = generateJwt(targetUser._id.toString());

    response.json({jwt: token})

});

module.exports = router;