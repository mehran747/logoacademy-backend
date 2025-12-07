// routes/courseRoutes.js
import express from 'express';
import { getAllCourses, getCourseById } from '../controllers/courseController.js';

const router = express.Router();

// GET /api/courses
router.get('/', getAllCourses);
router.get('/:id', getCourseById);

export default router;