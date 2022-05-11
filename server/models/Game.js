const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
    {
        game_title: {
            type: String,
            required: true,
        },
        winner: {
            type: String,
            default: null
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
// gameSchema
//     .virtual('gameStats')
//     .get(function(){
//         return 
//     })


const Game = model("Game", gameSchema);
module.exports = { Game, gameSchema };
