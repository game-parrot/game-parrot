const { User, Game } = require('../models');
const bcrypt = require("bcrypt");

// This is for signing up
const createUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(req.body.password, salt)

  const userToInsert = {
    username: req.body.username,
    password: password,
    salt: salt
  }

  const user = await User.create(userToInsert);

  if (!user) {
    return res.status(400).json({ message: 'Unable to create user' });
  }

  res.status(200).json({ _id: user._id, username: user.username });
}

// This is for authenticating a login
const authUser = async (req, res) => {
  // Find the user by the username
  const user = await User.findOne({
    username: req.body.username
  });

  if (!user) {
    return res.status(400).json({ message: 'Unable to authenticate user' });
  }

  // We want to verify the password
  const isValid = await bcrypt.compare(req.body.password, user.password)

  if (!isValid) {
    return res.status(400).json({ message: 'Unable to authenticate user' });
  }

  const token = jwt.sign({
    username: user.username,
    id: user._id
  }, process.env.JWT_SECRET)

  res.header("auth-token", token).json({ error: null, data: { user, token } })
}

// This has to do with verifying if the user is logged in (?)
const verifyUser = async (req, res) => {
  const token = req.headers["auth-token"]

  if (!token) {
    return res.status(401).json({ msg: "unauthorized" })
  }

  const isVerified = jwt.verify(token, process.env.JWT_SECRET)

  if (!isVerified) {
    return res.status(401).json({ msg: "unauthorized" })
  }

  const user = await User.findById(isVerified.id)

  if (!user) {
    return res.status(401).json({ msg: "unauthorized" })
  }

  return res.status(200).json({ _id: user._id, username: user.username })
}


// This if for the homepage
const getAllUsers = async (req, res) => {
  const allUsers = await User.find({}).populate('games').populate({ path: "games", populate: { path: "game_stats" } });

  if (!allUsers) {
    return res.status(400).json({ message: 'No users found' });
  }

  res.status(200).json(allUsers);
}

// This is for and the dashboard
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.userId).populate('games');

  if (!user) {
    return res.status(400).json({ message: 'No user found by that id' });
  }

  res.status(200).json(user);
}

const addGame = async (req, res) => {
  console.log(req.params.gameId);
  try {
    const addedGame = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { games: req.params.gameId } },
      { new: true, runValidators: true },
    );
    res.status(200).json(addedGame);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

const addFriend = async (req, res) => {
  try {
    const addFriend = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    );
    res.json(addFriend);
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  addGame,
  authUser,
  verifyUser,
  addFriend
};
