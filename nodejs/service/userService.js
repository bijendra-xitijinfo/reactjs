const { userModel } = require("../schema/userSchema");
const { getOneData, create, deleteData, updateData } = require('../dao/dao');
const {bcryptPassword, comparePassword, generateToken} = require('../utils/utils');
const { tokenModel } = require("../schema/tokenSchema");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const signupService = async (data) => {
    const { email } = data;
    if (! await getOneData(userModel, { email })) {
        data.password = await bcryptPassword(data.password);
        return {
            status: 200,
            message: await create(userModel, data),
        }
    }
    return {
        status: 409,
        message: 'User already exist',
    }
}

const loginService = async (user) => {
    const { email } = user;
    const userExist = await getOneData(userModel, { email });
    if (!userExist) {
        return {
            status: 404,
            token:'',
            message: "User have not any account please sign up",
        };
    }
    if (await comparePassword(user.password, userExist.password)) {
        const token = await generateToken(userExist, "user")
        await create(tokenModel,{token})
        return {
            status: 200,
            token,
            message:'User have loggedin',
        };
    }
    return {
        status: 401,
        token: '',
        message: 'Password does not match',
    };
}

const getUserService = async (userData) => {
    const { user } = userData;
    return {
        status: 200,
        message: user
    }
}

const deleteUserService = async (user) => {
    const {email} = user;
    const userExist = await getOneData(userModel, { email });
    if (!userExist) {
        return {
            status: 404,
            token:'',
            message: "User have not any account please sign up",
        };
    }
    return {
        status : 200,
        message: await deleteData(userModel,{email}),
    }
}

const updateUserService = async (data,user) => {
    data._id = user._id;
    const {email} = user;
    const userExist = await getOneData(userModel, { email });
    if (!userExist) {
        return {
            status: 404,
            token:'',
            message: "User have not any account please sign up",
        };
    }
    return {
        status: 200,
        message: await updateData(userModel,data)
    }
}

const getAllUserService = async (data) => {
    const {page, limit} = data;
    const users = await userModel.paginate({}, {
        page: page || 1,
        limit: limit || 1,
      });
  
      return {
        status: 200,
        message: users,
      };
}

const getTodayUserService = async () => {
    const today = new Date();
    const startOfWeek = new Date();
    startOfWeek.setDate(today.getDate() - today.getDay());
  
    const todayUsers = await userModel.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $dayOfMonth: "$createdAt" }, { $dayOfMonth: today }],
          },
        },
      },
      {
        $project: {
          name: 1,
          email: 1,
          contact: 1,
          address: 1,
          createdAt: 1,
          updatedAt: 1,
        },
      },
    ]);
  
    const weekUsers = await userModel.aggregate([
      {
        $match: {
          $expr: {
            $gte: ["$createdAt", startOfWeek],
          },
        },
      },
      {
        $project: {
          name: 1,
          email: 1,
          contact: 1,
          address: 1,
          createdAt: 1,
          updatedAt: 1,
        },
      },
    ]);
  
    return { status: 200, message: { todayUsers, weekUsers }};
  };
  
const getLastLoginService = async () => {
    const tokens = await tokenModel.find();
    const token = tokens[tokens.length - 1].token;
        return {
        status: 200,
        message: jwt.verify(token, "user")
    }
}

const createPostService = async (req) => {
  const {email} = req.user;
  const message =  await userModel.findOneAndUpdate({email}, { $push: {post: req.body}}, {new: true});
  return {
    status: 200,
    message,
  }
}

const deletePostService = async (req) => {
  const {_id} = req.user;
  const {postName} = req.body;
  const message = await userModel.updateOne({_id}, { $pull: {post: {postName: postName}}}, {new: true});
  return {
    status: 200,
    message,
  }
}

const updatePostService = async (req) => {
  const {_id} = req.user;

  const message = await userModel.updateOne(
    { _id, 'post.postName': req.body.postName },
    { $set: { 'post.$': req.body } }
  );
  return {
    status: 200,
    message,
  } 
}

const getAllPostService = async (req) => {
  const message = await userModel.aggregate([
    { $match: { email: req.user.email } },
    { $unwind: "$post" },
    { $project: { _id: 0, post: 1 , } },
  ]);
  return {
    status: 200,
    message,
  }
} 
module.exports = { 
    signupService, 
    loginService, 
    getUserService, 
    deleteUserService, 
    updateUserService,
     getAllUserService, 
     getTodayUserService, 
     getLastLoginService,
     createPostService, 
     deletePostService,
     updatePostService,
     getAllPostService,
    };