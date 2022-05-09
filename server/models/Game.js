const { Schema, model } = require("mongoose");
const { gameStatsSchema } = require("./Game-Stats")

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
        game_stats: [ gameStatsSchema ]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

const Game = model("Game", gameSchema);
module.exports = Game;

// get game 
// exclude game_url