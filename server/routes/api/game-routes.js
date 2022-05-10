const router = require('express').Router();

// Import any controllers needed here
const {
    createGame,
    getAllgames
} = require('../../controllers/game-contoller');

// Declare the routes that point to the controllers above
router.route('/').get(getAllgames);
router.route('/').post(createGame);

module.exports = router;