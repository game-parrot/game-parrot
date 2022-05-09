const { User } = require('../models');

// This is for signing up
const createUser = async (req, res) => {
  const user = await User.create(req.body);

  if (!user) {
    return res.status(400).json({ message: 'Unable to create user' });
  }

  res.status(200).json(user);
}

// This if for the homepage
const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});

  if (!allUsers) {
    return res.status(400).json({ message: 'No users found' });
  }

  res.status(200).json(allUsers);
}

// This is for logging in and the dashboard
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(400).json({ message: 'No user found by that id' });
  }

  res.status(200).json(sample);
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById
};