const router = require('express').Router();

// Import any controllers needed here
const {
    updateStats,
} = require('../../controllers/game_stats-controller');

// Declare the routes that point to the controllers above
router.route('/:userId').put(updateStats);

module.exports = router;