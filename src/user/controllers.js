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
            // username: req.params.username,
            username: req.body.username,
        };
        console.log("Find single user", userObj);
        const response = await User.findOne(userObj);
        res.status(200).json({data:response});
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

// Update user
exports.updateUser = async (req, res) => {
    try {
        const userObj = {
            // username: req.params.username,
            username: req.body.username,
            newusername: req.body.newusername //***
        };
        console.log("update single user", userObj);
        let response = await User.findOneAndUpdate({
            username: userObj.userName
        }, {
            $set: {
                username: userObj.newusername,
            }
        }, {
            new: true
        });
        console.log("Succesfully updated:", userObj);
        response = await User.findOne(userObj);
        res.status(200).json({data:response});
        // console.log(response.modifiedCount > 0);
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}


// const updateUser = async (req,res)=>{
//     try {
//         const userObj = {
//             username: req.body.username,
//             newusername: req.body.newusername
//         };
//         const response = await User.findOne(userObj);
//         response.username = newusername.newusername;
//         await response.save;
//         res.status(200).json({data:response});
//     } catch (error) {
//         console.log(error);
//         res.send(error);
//     }
// }