const { gameStatsSchema } = require("../models/Game-Stats")

const users = [
    { username: 'andrew', password: 'potato' },
    { username: 'eugene', password: 'potato' }
]

const games = [
    { game_title: 'chess', game_url: 'https://buddyboardgames.com/chess', game_stats: [{games_played: 5, games_won: 3, games_lost: 2}]},
    { game_title: 'checkers', game_url: 'https://buddyboardgames.com/checkers', game_stats: [gameStatsSchema]}
]

module.exports = {
    users,
    games
}