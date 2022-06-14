const User = require("./model");



// create user
exports.createUser = async (req, res) => { //Controller must include return statement and send a response (res)
    try {
        // console.log(req, res);
        console.log(req.body.message);
        const userObj = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        const newUser = await User.create(userObj);
        res.send({
            newUser
        }) //Sends json data
    } catch (error) {
        console.log(error);
        res.send({
            error
        });
    }
};

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

// find users
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

exports.findUser = async (req, res)=>{
    try {
        const userObj = {
            // username: req.params.username,
            username: req.body.username
        };
        console.log("Find single user", userObj);
        const response = await User.findOne(userObj);
        res.status(200).json({data:response});
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

// exports.findUserAgain = async (req,res)=>{ // As findUsers is also tied to GET - this command would never be run normally. We would have to add and extra "/users" onto the end of our address string in the API client
//     res.send("Find user again");
// }