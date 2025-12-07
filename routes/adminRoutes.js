// routes/adminRoutes.js
import express from 'express';
import { protect } from '../middleware/auth.js';
import { adminOnly } from '../middleware/admin.js'; // اینو الان میسازیم
import {
  getCourses, createCourse, updateCourse, deleteCourse,
  getUsers, updateUser, deleteUser,
  getEnrollments, updateEnrollmentStatus
} from '../controllers/adminController.js';

const router = express.Router();

router.use(protect, adminOnly);

// دوره‌ها
router.route('/courses').get(getCourses).post(createCourse);
router.route('/courses/:id').patch(updateCourse).delete(deleteCourse);

// کاربران
router.route('/users').get(getUsers);
router.route('/users/:id').patch(updateUser).delete(deleteUser);

// درخواست‌های ثبت‌نام
router.route('/enrollments').get(getEnrollments);
router.route('/enrollments/:id').patch(updateEnrollmentStatus);

export default router;