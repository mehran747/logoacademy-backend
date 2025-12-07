// routes/userRoutes.js
import express from 'express';
import { enrollInCourse, getMyCourses, cancelEnrollment } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/enroll', protect, enrollInCourse);
router.get('/my-courses', protect, getMyCourses);
router.delete('/enroll/:courseId', protect, cancelEnrollment); // جدید

export default router;