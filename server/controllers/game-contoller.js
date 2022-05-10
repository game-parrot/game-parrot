const { Game } = require('../models');

// This is them providing a link which is saved to the database and potentially called through iFrames
const createGame = async (req, res) => {
    const game = await Game.create(req.body);

    if (!game) {
        return res.status(400).json({ message: 'Unable to create game' });
    }

    res.status(200).json(game);
}

// This is displayed in the chatroom
const getAllgames = async (req, res) => {
    const allgames = await Game.find({});

    if (!allgames) {
        return res.status(400).json({ message: 'No games found' });
    }

    res.status(200).json(allgames);
}

module.exports = {
    createGame,
    getAllgames
};
