const { signupService,
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
  getAllPostService
} = require('../service/userService');

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const result = await signupService(req.body);
    res.status(result.status).send(result.message);
  } catch (err) {
    res.send(err.message);
  }
};

const login = async (req, res) => {
  try {
    const result = await loginService(req.body);
    res.status(result.status).send({ token: result.token, message: result.message });
  } catch (err) {
    res.send(err);
  }
}

const getUser = async (req, res) => {
  try {
    const result = await getUserService(req);
    res.status(result.status).send(result.message);
  } catch (err) {
    res.send(err);
  }
}

const deleteUser = async (req, res) => {
  try {
    const result = await deleteUserService(req.user);
    res.status(result.status).send(result.message);
  } catch (err) {
    res.send(err);
  }
}

const updateUser = async (req, res) => {
  try {
    const result = await updateUserService(req.body, req.user);
    res.status(result.status).send(result.message);
  } catch (err) {
    res.send(err);
  }
}

const getAllUser = async (req, res) => {
  try {
    const result = await getAllUserService(req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
}

const getTodayUser = async (req, res) => {
  try {
    const result = await getTodayUserService();
    res.status(result.status).send(result.message);
  } catch (err) {
    res.send(err);
  }
}

const getLastLoginUser = async (req, res) => {
  try {
    const result = await getLastLoginService();
    res.status(result.status).send(result.message);
  } catch (err) {
    res.send(err);
  }
}

const createPost = async (req, res) => {
  try {
    const result = await createPostService(req);
    res.status(result.status).send(result.message);
  } catch (err) {
    res.send(err);
  }
}

const deletePost = async (req, res) => {
  try {
    const result = await deletePostService(req);
    res.status(result.status).send(result.message);
  } catch (err) {
    res.send(err);
  }
}

const updatePost = async (req, res) => {
  try {
    const result = await updatePostService(req);
    res.status(result.status).send(result.message);
  } catch (err) {
    res.send(err);
  }
}

const getAllPost = async (req, res) => {
  try {
    const result = await getAllPostService(req);
    res.status(result.status).send(result.message);
  } catch (err) {
    res.send(err);
  }
}
module.exports = { signup,
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
  getAllPost,
};
