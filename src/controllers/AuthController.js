const express = require('express');
const { User } = require('../models/UserModel');
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
    
});

// GET JWT from headers
router.get("/verify", async (request, response) => {
    
});

// GET JWT from headers and re-issue. 
router.get("/regenerate", async (request, response) => {
    
});


module.exports = router;