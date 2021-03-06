const router = require('express').Router();

// Import any controllers needed here
const {
    createGame,
    getAllgames,
    addUserToGame,
    getGameById,
    updateWinner
} = require('../../controllers/game-contoller');

// Declare the routes that point to the controllers above
router.route('/').get(getAllgames);
router.route('/').post(createGame);
router.route('/:gameId').get(getGameById);
router.route('/:gameId/users/:userId').post(addUserToGame);
router.route('/:gameId/winner/:userId').post(updateWinner);

module.exports = router;