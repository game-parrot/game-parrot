const { Schema, model } = require("mongoose");

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
    salt: {
      type: String
    },
    games: [{
      type: Schema.Types.ObjectID,
      ref: "Game",
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
