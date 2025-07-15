// models/topic.model.js
import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  estimatedTime: { type: Number, required: true }, // in minutes
  difficulty: { type: Number, min: 1, max: 5 },
  deadline: { type: Date },
  actualTimeSpent: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
});

const Topic = mongoose.model("Topic", topicSchema);
export default Topic;
