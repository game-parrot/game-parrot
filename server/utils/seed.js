const connection = require('../config/connection');
const { User, Game} = require('../models');
const {users, games} = require('./data')

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await User.insertMany(users);
    await Game.deleteMany({});
    await Game.insertMany(games);

    console.table(users);
    console.table(games);
    console.info('Seeding complete!');
    process.exit(0);
})