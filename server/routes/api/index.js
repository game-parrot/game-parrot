const router = require('express').Router();
const gameRoutes = require('./game-routes');
const userRoutes = require('./user-routes');
const gameStatRoutes = require('./game_stat-routes');

router.use('/games', gameRoutes);
router.use('/users', userRoutes);
router.use('/game_stats', gameStatRoutes);

module.exports = router;
