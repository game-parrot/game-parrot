const { Schema, model } = require("mongoose");
const { gameSchema } = require("./Game")

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
    games: [gameSchema],
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

const User = model("user", userSchema);

module.exports = User;
