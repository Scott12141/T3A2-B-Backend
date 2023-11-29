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
    let newUser = await User.create(request.body).catch(error => {return error});

    response.json(newUser);
});

// POST {email, password} for login
router.post("/login", async (request, response) => {
    // Find user by email provided
    let targetUser = await User.findOne({email: request.body.email});

    // Compare password provided by user with that in DB
    let isPasswordCorrect = await comeparePassword(request.body.password, targetUser.password);

    if (!isPasswordCorrect){
        response.status(403).json({error:"You are not authorised!"})
    }

    // If user exists and password is correct - generate JWT
    let assignedJwt = generateJwt(targetUser._id.toString());

    response.json({jwt: assignedJwt})

});

// GET JWT from headers
router.get("/verify", async (request, response) => {
    
});

// GET JWT from headers and re-issue. 
router.get("/regenerate", async (request, response) => {
    
});


module.exports = router;