const { signup, login, getUser, deleteUser, updateUser, getAllUser, getTodayUser, getLastLoginUser } = require('../controller/userController');
const { userVarification } = require('../middleware/middleware');
const {getTodayUserService} = require('../service/userService')

const userRouter = require('express').Router();

userRouter.post('/signup', signup);
userRouter.get('/login', login);
userRouter.get('/getuser', userVarification, getUser)
userRouter.delete('/deleteuser', userVarification, deleteUser);
userRouter.put('/updateUser', userVarification, updateUser);
userRouter.get('/getAllUser', userVarification, getAllUser);
userRouter.get('/getTodayDate', userVarification, getTodayUser);
userRouter.get('/lastloginuser', userVarification, getLastLoginUser)
module.exports = { userRouter };