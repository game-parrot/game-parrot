const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
    {
        game_title: {
            type: String,
            required: true,
        },
        game_url: {
            type: String,
            required: true
        },
        // game_stats: [ gameStatsSchema ]
    },
    {
        toJSON: {
            getters: true,
        }
    }
);

const Game = model("Game", gameSchema);
module.exports = {Game, gameSchema};

// get game 
// exclude game_url