import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    fullName: { 
      type: String, 
      required: true },
    email: { 
      type: String, 
      required: true },
    phone: { 
      type: String, 
      required: true },
    password: { 
      type: String, 
      required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    profession: { type: String, required: true },
    experience: { type: Number, required: true },
    profilePic: { type: String }, 
  },
  { timestamps: true }
);

export const Profile = mongoose.model("Profile", profileSchema);
