const bcrypt = require("bcryptjs");
const User = require("../user/model");
const jwt = require("jsonwebtoken");


exports.hashPassword = async (req,res, next)=>{ //This will go on the create user endpoint
    try {
        // change value of password to a hash value
        req.body.password = await bcrypt.hash(req.body.password, 8); //convert to hash. hash takes two objects, the pass and 'salt'. the higyher the salt number, the more complex the result
        console.log("hash password");
        next();// Dont forget to put your next funct in to ensure that the req,res continues
    } catch (error) {
        console.log(error);
        res.send({error: error.code});
    }
};

exports.tokenCheck = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        const decodedToken = jwt.verify(token, process.env.SECRET);
        req.user = await User.findById( decodedToken.id );
        next();
    } catch (error) {
        console.log(error);
        res.send({error: error.code});
    }
}
