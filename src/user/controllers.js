const User = require("./model");
const bcrypt = require ("bcryptjs");// for compare pw nested function
const jwt = require("jsonwebtoken");
const { findOne } = require("./model");

// create user
exports.createUser = async (req, res, next) => { //Controller must include return statement and send a response (res)
    console.log("create user");
    try {
        // console.log(req, res);
        const userObj = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        const newUser = await User.create(userObj);
        
        //create jwt token
        const token = await jwt.sign({id: newUser._id}, process.env.SECRET);//sign is a method that creates a token. sign takes 2 arguments: what we want to store in the token (as an object) AND a unique, secret, key 
        console.log(token);
        res.status(201).json({newUser, token});//confirm this thing has been done

    } catch (error) {
        console.log(error);
        res.send({error});

    }
};

exports.tokenLogin = async (req,res)=>{
    console.log(req.user);
    const token = await jwt.sign({id: req.user._id}, process.env.SECRET);
    res.send({user: req.user, token});}
//create a token which is sent back in the repsonse to stay signed in


// delete user
exports.deleteUser = async (req, res) => {
    console.log("req params", req.params);
    try {
        const userObj = {
            username: req.params.username,
        };
        console.log("deleteUser start hit");
        const delUser = await User.deleteOne(userObj);
        console.log("delUser hit");
        res.send(delUser);
        console.log("delUser hit", delUser);
    } catch (error) {
        console.log(error);
    }
}

// find all users
// exports.findUsers = async (req,res)=>{
//     try{
//         console.log("Find users");
//         const response = await User.find();
//         res.status(200).json({data:response});
//     } catch (error){
//         console.log(error);
//         res.send(error);
//     }
// }

// Find single user
exports.findUser = async (req, res)=>{
    try {
        const userObj = {
            username: req.params.username
            // username: req.body.username,// BODy gives away
        };
        console.log("Find single user", userObj);
        const response = await User.findOne(userObj);
        console.log(response.username, response.password);
        res.status(200).json({data:response});
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

// Update user V2
exports.updateUser = async (req, res) => {
    try {
        const userObj = {
            username: req.body.username,
            newusername: req.body.newusername
        };
        console.log("update single user", userObj);
        let response = await User.findOneAndUpdate({
            username: userObj.username
        }, {
            $set: {
                username: userObj.newusername,
            }
        }, {
            new: true
        });
        response = await User.findOne({username: userObj.newusername});
        res.status(200).json({data:response});
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}


// Update user V1
// exports.updateUser = async (req, res) => {
//     try {
//         const filter = {username: req.body.username};
//         const update = {username: req.body.newusername};

//         console.log("update single user", userObj);
//         const response = await User.findOneAndUpdate(filter, update, {new: true});

//         console.log(response);
//         res.status(200).json({data:response});
//     } catch (error) {
//         console.log(error)
//         res.send(error);
//     }
// }

//TBC - checking user exists - similar to find user
exports.checkUserExists = async (req,res,next)=>{
    next();
}