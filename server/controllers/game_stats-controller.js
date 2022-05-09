const { GameStats } = require('../models');

// Update game stats
const updateStats = async (req, res) => {
    const stats = await GameStats.updateOne(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
    );

    if (!allgames) {
        return res.status(400).json({ message: 'No games found' });
    }

    res.status(200).json(allgames);
}

module.exports = {
    updateStats
};
