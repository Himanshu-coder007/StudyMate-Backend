// models/user.model.js
import mongoose from "mongoose";
import preferenceSchema from "./preferences.model.js";
import scheduleSchema from "./schedule.model.js";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  preferences: preferenceSchema,
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
  schedule: [scheduleSchema],

  streak: { type: Number, default: 0 },
  totalTimeStudied: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;
