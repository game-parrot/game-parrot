const { Schema, model } = require("mongoose");

const gameStatsSchema = new Schema(
    {
        games_played: {
            type: Number,
            default: 0
        },
        games_won: {
            type: Number,
            default: 0
        },
        games_lost: {
            type: Number,
            default: 0
        },
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const GameStats = model("gamestats", gameStatsSchema);
module.exports = {GameStats, gameStatsSchema};
