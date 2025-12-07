// controllers/userController.js
import User from '../models/User.js';
import Course from '../models/Course.js';

// درخواست ثبت‌نام در دوره
export const enrollInCourse = async (req, res) => {
  const { courseId } = req.body;
  const userId = req.user.id; // از میدلوِر auth میاد

  try {
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'دوره پیدا نشد' });

    const user = await User.findById(userId);
    const alreadyEnrolled = user.enrolledCourses.some(c => c.course.toString() === courseId);

    if (alreadyEnrolled) {
      return res.status(400).json({ message: 'شما قبلا برای این دوره درخواست دادید' });
    }

    user.enrolledCourses.push({ course: courseId });
    await user.save();

    res.json({ message: 'درخواست شما با موفقیت ثبت شد. کارشناس ما بزودی تماس می‌گیرد.' });
  } catch (error) {
    res.status(500).json({ message: 'خطا در سرور' });
  }
};

// گرفتن دوره‌های کاربر
export const getMyCourses = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('enrolledCourses.course');
    res.json(user.enrolledCourses);
  } catch (error) {
    res.status(500).json({ message: 'خطا در سرور' });
  }
};

// حذف دوره ای که کاربر درخواست داده
export const cancelEnrollment = async (req, res) => {
  const { courseId } = req.params;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'کاربر پیدا نشد' });

    const index = user.enrolledCourses.findIndex(
      item => item.course.toString() === courseId
    );

    if (index === -1) {
      return res.status(400).json({ message: 'شما برای این دوره درخواست نداده‌اید' });
    }

    user.enrolledCourses.splice(index, 1);
    await user.save();

    res.json({ message: 'درخواست شما با موفقیت لغو شد' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'خطا در سرور' });
  }
};