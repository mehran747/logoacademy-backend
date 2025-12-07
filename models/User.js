// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  enrolledCourses: [{ 
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    requestedAt: { type: Date, default: Date.now },
    status: { type: String, default: 'pending', enum: ['pending', 'contacted', 'enrolled'] }
  }]
}, { timestamps: true });

export default mongoose.model('User', userSchema);