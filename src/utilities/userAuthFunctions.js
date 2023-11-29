const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Function to check users provided password with that which was provided on account creation
async function comeparePassword(plaintextPassword, hashedPassword) {
    let doesPasswordMatch = false;

    doesPasswordMatch = await bcrypt.compare(plaintextPassword, hashedPassword)

    return doesPasswordMatch
}

// Function to assign a user a JWT after theyve passed authentication that lasts for 30 days
function generateJwt(userId){
    let newJwt = jwt.sign({userId}, process.env.JWT_KEY, {expiresIn: "30d"});

    return newJwt;
}

module.exports = {
    comeparePassword, generateJwt
}