import mongoose from 'mongoose';

//Define schema
const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mode: { type: String, required: true },
  equipment: { type: [String], required: true },
  exercises: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  trainerTips: { type: [String], required: true }
});

const Workout = mongoose.model('workout', workoutSchema);

export default Workout;
