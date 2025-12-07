// models/Course.js
import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: { type: String, required: true },
  subtitle: String,
  students: Number,
  duration: String,
  level: String,
  price: String,
  tags: [String],
  poster: String,
  video: String,
  description: String,
  syllabus: [
    {
      title: String,
      desc: String,
    },
  ],
  faqs: [
    {
      q: String,
      a: String,
    },
  ],
});

const Course = mongoose.model('Course', courseSchema);
export default Course;