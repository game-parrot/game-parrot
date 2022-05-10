const { Schema, model } = require("mongoose");
//const { gameSchema } = require("./Game")

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    games: [{
      type: Schema.Types.ObjectID,
      ref: "Game",
      game_stats: [
        {
          type: Schema.Types.ObjectID,
          ref: 'GameStats'
        }
      ]
    }],
    friends: [this]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    }
  }
);

userSchema.virtual("friendCount").get(function () { return this.friends.length })

const User = model("User", userSchema);

module.exports = User;
