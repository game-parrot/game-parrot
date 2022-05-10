const router = require('express').Router();

// Import any controllers needed here
const {
    createUser,
    getAllUsers,
    getUserById
} = require('../../controllers/user-controller');

// Declare the routes that point to the controllers above
router.route('/').get(getAllUsers);
router.route('/').post(createUser);

router.route('/:userId').post(getUserById);

module.exports = router;