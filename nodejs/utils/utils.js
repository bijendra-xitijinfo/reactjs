const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const bcryptPassword = async (password) => {
    return await bcrypt.hash(password,8);
  }

  const comparePassword = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword);
  }

  const generateToken = (payload, key) => {
    return jwt.sign(JSON.stringify(payload), key);
  }

  module.exports = {
    bcryptPassword,
    comparePassword,
    generateToken,
  }