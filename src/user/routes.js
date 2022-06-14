const {Router} = require("express");// curly brackets to pull just one method from library
const userRouter = Router();
const {createUser, deleteUser, findUsers, findUserAgain}=require("./controllers");
const {hashPassword} = require("../middleware");//i8mport encrypted object/password



userRouter.post("/", hashPassword, createUser);//notice there is no parenthisis at end of createUser - worls same as putting function in anonymous function
userRouter.delete("/:username",deleteUser);
userRouter.get("/",findUsers);//GET requests cannot have a body - meaning objects will always be returned unless you use the params 
// userRouter.get("/useragain", findUserAgain)//You can't have two request of the same type (i.e. GET) with the same first argument
module.exports = userRouter;



