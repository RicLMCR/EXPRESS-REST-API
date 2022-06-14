const {Router} = require("express");// curly brackets to pull just one method from library
const userRouter = Router();
const {createUser}=require("./controllers");
const {hashPassword} = require("../middleware");//i8mport encrypted object/password

userRouter.post("/user", hashPassword, createUser);//notice there is no parenthisis at end of createUser - worls same as putting function in anonymous function

module.exports = userRouter;



