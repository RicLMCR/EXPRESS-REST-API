const bcrypt = require("bcryptjs");
const User = require("../user/model");

exports.hashPassword = async (req,res, next)=>{ //This will go on the create user endpoint
    try {
        // change value of password to a hash value
        req.body.password = await bcrypt.hash(req.body.password, 8); //convert to hash. hash takes two objects, the pass and 'salt'. the higyher the salt number, the more complex the result
        next();// Dont forget to put your next funct in to ensure that the req,res continues
    } catch (error) {
        console.log(error);
        res.send({error: error.code});
    }
};

// compare password with 'test123'
// const hash = newUser.password;
// bcrypt.compare("test123", hash, function (err, isMatch) {
//     if (err) {
//         throw err
//     } else if (!isMatch) {
//         console.log("Password doesn't match!")
//     } else {
//         console.log("Password matches!")
//     }
// });

// exports.tokenCheck = async(req,res,next)=>{
//     try {
//         const token = req.header("Authorization");// Targets API header 'authorization
//         console.log(token);
//         const decodedToken = jwt.verify(token, process.env.SECRET);
//         console.log(decodedToken);
//         const user = await User.findById(decodedToken.id);
//         console.log(user);
//         next();
//     } catch (error) {
//         console.log(error);
//         res.send({error: error.code});
//     }
// }

