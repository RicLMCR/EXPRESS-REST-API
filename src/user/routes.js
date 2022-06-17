const {Router} = require("express");// curly brackets to pull just one method from library
const userRouter = Router();
const {createUser, deleteUser, findUsers, findUser, updateUser, tokenLogin}=require("./controllers");
const {hashPassword, tokenCheck} = require("../middleware");//import encrypted object/password & jwtoken functions


//test function to act as bookend to token GET route
const testFunc = async (req, res, next)=>{
    console.log("test function");
    next();
    res.send();
};

userRouter.post("/", hashPassword, createUser);//notice there is no parenthisis at end of createUser - worls same as putting function in anonymous function
userRouter.delete("/:username",deleteUser);
// userRouter.get("/:username", findUser);//GET requests as params - put in the search bar. Meaning objects will always be returned unless you use the params. The colon - : plus name declaration = key within an object. The name provided needs to match the property you are filtering
userRouter.get("/user",tokenCheck, testFunc);//Note: createUser is only n here as a temp AbortController. It will be replaced
userRouter.put("/", updateUser);/* PUT requests in body */
module.exports = userRouter;



