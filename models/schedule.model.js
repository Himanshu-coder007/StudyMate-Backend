// models/schedule.model.js
import mongoose from "mongoose";

const scheduledTopicSchema = new mongoose.Schema(
  {
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },
    plannedTime: {
      type: Number,
      required: true, // in minutes
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const scheduleEntrySchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    topics: [scheduledTopicSchema],
  },
  { _id: false }
);

export default scheduleEntrySchema;
