const { User, Game } = require('../models');
//const { games } = require('../utils/data');

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
  const allUsers = await User.find({}).populate('games');

  if (!allUsers) {
    return res.status(400).json({ message: 'No users found' });
  }

  res.status(200).json(allUsers);
}

// This is for logging in and the dashboard
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.userId).populate('games');

  if (!user) {
    return res.status(400).json({ message: 'No user found by that id' });
  }

  res.status(200).json(user);
}

const addGame = async (req,res) => {
  console.log(req.params.gameId);
  try{
    const addedGame = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { games: req.params.gameId}},
      { new: true, runValidators: true},
      );
    res.status(200).json(addedGame);
  }catch (err){
    console.error(err);
    res.status(500).json(err);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  addGame
};
