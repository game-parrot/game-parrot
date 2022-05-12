const { Game } = require('../models');

// This is them providing a link which is saved to the database and potentially called through iFrames
// Not utilizing yet
const createGame = async (req, res) => {
    const game = await Game.create(req.body);

    if (!game) {
        return res.status(400).json({ message: 'Unable to create game' });
    }

    res.status(200).json(game);
}

// This is displayed in the chatroom
const getAllgames = async (req, res) => {
    const allgames = await Game.find({}).populate('users');

    if (!allgames) {
        return res.status(400).json({ message: 'No games found' });
    }

    res.status(200).json(allgames);
}

const getGameById = async (req, res) => {
    const game = await Game.findById(req.params.gameId).populate('users');
    
    if (!game) {
      return res.status(400).json({ message: 'No user found by that id' });
    }
  
    res.status(200).json(game);
}

// Adding a user to the game function
const addUserToGame = async (req, res) => {
    console.log(req.params.userId);
    try {
      const game = await Game.findOneAndUpdate(
        { _id: req.params.gameId },
        { $addToSet: { users: req.params.userId } },
        { new: true, runValidators: true },
      );
      res.status(200).json(game);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  // Updating the winner of a game
  const updateWinner = async (req, res) => {
    try {
      const game = await Game.findOneAndUpdate(
        { _id: req.params.gameId },
        { $set: {winner: req.params.userId }},
        { new: true, runValidators: true }
      );
      res.status(200).json(game)
    }
    catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

module.exports = {
    createGame,
    getAllgames,
    addUserToGame, 
    getGameById,
    updateWinner
};
