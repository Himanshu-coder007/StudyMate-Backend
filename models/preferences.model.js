// models/preferences.model.js
import mongoose from "mongoose";

const preferenceSchema = new mongoose.Schema(
  {
    dailyStudyHours: {
      type: Number,
      required: true,
    },
    preferredStudyTime: {
      type: String,
      enum: ["morning", "afternoon", "evening", "night"],
      default: "evening",
    },
    totalStudyGoalHours: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

export default preferenceSchema;
