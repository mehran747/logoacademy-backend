// controllers/adminController.js
import Course from '../models/Course.js';
import User from '../models/User.js';

// دوره‌ها
export const getCourses = async (req, res) => {
  const courses = await Course.find().sort({ createdAt: -1 });
  res.json(courses);
};

export const createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
};

export const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(course);
};

export const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: 'دوره حذف شد' });
};

// کاربران
export const getUsers = async (req, res) => {
  const users = await User.find().select('-password').populate('enrolledCourses.course');
  res.json(users);
};

export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
  res.json(user);
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'کاربر حذف شد' });
};

// درخواست‌های ثبت‌نام
export const getEnrollments = async (req, res) => {
  const users = await User.find({ 'enrolledCourses.status': 'pending' })
    .select('name email phone enrolledCourses')
    .populate('enrolledCourses.course', 'title price duration');

  // فقط enrolledCourses با وضعیت pending رو برگردون
  const filtered = users.map(user => ({
    ...user.toObject(),
    enrolledCourses: user.enrolledCourses.filter(e => e.status === 'pending')
  })).filter(user => user.enrolledCourses.length > 0);

  res.json(filtered);
};

export const updateEnrollmentStatus = async (req, res) => {
  const { id } = req.params; // id از enrolledCourses
  const { status } = req.body;

  const user = await User.findOneAndUpdate(
    { 'enrolledCourses._id': id },
    { $set: { 'enrolledCourses.$.status': status } },
    { new: true }
  );

  res.json({ message: 'وضعیت بروز شد', status });
};