const {Router} = require("express");// curly brackets to pull just one method from library
const userRouter = Router();
const {createUser, deleteUser, findUsers, findUser, updateUser}=require("./controllers");
const {hashPassword} = require("../middleware");//import encrypted object/password



userRouter.post("/", hashPassword, createUser);//notice there is no parenthisis at end of createUser - worls same as putting function in anonymous function
userRouter.delete("/:username",deleteUser);
userRouter.get("/", findUser);//GET requests cannot have a body - meaning objects will always be returned unless you use the params 
userRouter.put("/", updateUser);
module.exports = userRouter;



