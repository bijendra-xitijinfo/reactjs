const { 
    signup, 
    login, 
    getUser, 
    deleteUser, 
    updateUser, 
    getAllUser, 
    getTodayUser, 
    getLastLoginUser, 
    createPost,
    deletePost,
    updatePost,
    getAllPost
} = require('../controller/userController');
const { userVarification } = require('../middleware/middleware');

const userRouter = require('express').Router();

userRouter.post('/signup', signup);
userRouter.get('/login', login);
userRouter.get('/getuser', userVarification, getUser)
userRouter.delete('/deleteuser', userVarification, deleteUser);
userRouter.put('/updateUser', userVarification, updateUser);
userRouter.get('/getAllUser', userVarification, getAllUser);
userRouter.get('/getTodayDate', userVarification, getTodayUser);
userRouter.get('/lastloginuser', userVarification, getLastLoginUser);
userRouter.put('/createPost', userVarification, createPost);
userRouter.put('/deletepost', userVarification, deletePost);
userRouter.put('/updatepost', userVarification, updatePost);
userRouter.get('/getallpost', userVarification, getAllPost);
module.exports = { userRouter };