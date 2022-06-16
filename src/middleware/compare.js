const bcrypt = require("bcryptjs");

// compare password with 'test123'
const hash = newUser.password;
bcrypt.compare("test123", hash, function (err, isMatch) {
    if (err) {
        throw err
    } else if (!isMatch) {
        console.log("Password doesn't match!")
    } else {
        console.log("Password matches!")
    }
});