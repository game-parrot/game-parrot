const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
    {
        game_title: {
            type: String,
            required: true,
        },
        winner: {
            type: String
        },
        users: [{
            type: Schema.Types.ObjectID,
            ref: "User",
        }]
    },
    {
        toJSON: {
            getters: true,
        }
    }
);

// Add a virtual that grabs all the times the user won and how many games they've played

const Game = model("Game", gameSchema);
module.exports = { Game, gameSchema };


/*

GamePlayed.findAll({where: {
    $in {
        users: req.params.userId
    }
}})  => find all games where user was playing => user a virtual or just an array reducer to do the math to figure out our score for the day

*/
// get game 
// exclude game_url