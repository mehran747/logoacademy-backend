// controllers/courseController.js
import Course from '../models/Course.js';

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ id: 1 }); // یا createdAt: -1
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'خطا در دریافت دوره‌ها' });
  }
};
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'دوره پیدا نشد' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'خطا در سرور' });
  }
};