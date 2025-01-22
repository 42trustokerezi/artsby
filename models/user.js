import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  role: {
    type: String,
    enum: ["user", "artist"],
    default: "user",
  },
},{timestamps: true});


const User = models.User || model('User', UserSchema);
export default User;