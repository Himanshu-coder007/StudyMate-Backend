import mongoose from "mongoose";
import preferenceSchema from "./preferences.model.js";
// Removed direct import of scheduleSchema (use reference if needed)

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  preferences: preferenceSchema, // embedded
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],

  // Optional: switch to reference if this gets large
  schedule: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Schedule",
    },
  ],

  streak: { type: Number, default: 0 },
  totalTimeStudied: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;
