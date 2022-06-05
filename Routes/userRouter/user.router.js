const express = require('express');
const userRouter = express.Router();
const {userSignUp,userLogIn} = require('./user.controller')


userRouter.post('/signup',userSignUp);
userRouter.post('/login',userLogIn)

module.exports= userRouter;