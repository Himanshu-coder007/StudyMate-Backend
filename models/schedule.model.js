// models/schedule.model.js
import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    plannedTime: {
      type: Date,
    },
    completionTime: {
      type: Date,
    },
  },
  {
    timestamps: { createdAt: "createdAt" },
  }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);
export default Schedule;
