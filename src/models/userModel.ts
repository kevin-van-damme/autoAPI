import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    naam: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      required: false,
      default:
        "https://greekherald.com.au/wp-content/uploads/2020/07/default-avatar.png",
    },
    // niet vergeten ww te hashen!! TODO
    wachtwoord: {
      type: String,
      required: true,
    },
    favorieten: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
