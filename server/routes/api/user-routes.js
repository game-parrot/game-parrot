const router = require('express').Router();

// Import any controllers needed here
const {
    createUser,
    getAllUsers,
    getUserById,
    addGame,
    authUser,
    verifyUser,
    addFriend
} = require('../../controllers/user-controller');

// Declare the routes that point to the controllers above
router.route('/').get(getAllUsers).post(createUser);
router.route('/auth').post(authUser)
router.route('/verify').post(verifyUser)

router.route('/:userId').get(getUserById);

router.route('/:userId/games/:gameId').post(addGame);

router.route("/:userId/friends/:friendId").post(addFriend)

module.exports = router;