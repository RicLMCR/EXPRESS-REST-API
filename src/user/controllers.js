const User = require("./model");

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