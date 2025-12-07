// server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
// routes
import courseRoutes from './routes/courseRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();
connectDB();

const app = express();

// میدلوِرها
app.use(cors());
app.use(express.json());
app.use('/api/admin', adminRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);




// صفحه اصلی
app.get('/', (req, res) => {
  res.send(`
    <h1 style="font-family: Tahoma; text-align: center; margin-top: 100px; color: #4f46e5;">
      بک‌اند لوگوآکادمی فعاله! 
    </h1>
    <p style="text-align: center; font-size: 18px;">
      همه چیز آفلاین و کامل کار می‌کنه
    </p>
  `);
});

const PORT = process.env.PORT || 10000;

// ==== روت تست موقت برای دیباگ ====
app.get('/api/admin/test-enrollments', async (req, res) => {
  try {
    console.log('تست روت اجرا شد');

    // فقط یه کاربر با درخواست پیدا کن
    const user = await User.findOne({ 'enrolledCourses.0': { $exists: true } })
      .select('name email enrolledCourses')
      .lean();

    if (!user) {
      return res.json({ message: 'هیچ درخواستی در دیتابیس نیست', usersCount: await User.countDocuments() });
    }

    res.json({
      message: 'درخواست پیدا شد!',
      user: {
        name: user.name,
        email: user.email,
        enrollmentsCount: user.enrolledCourses.length,
        firstEnrollment: user.enrolledCourses[0]
      },
      rawUser: user
    });

  } catch (error) {
    console.error('خطا در تست روت:', error);
    res.status(500).json({ error: error.message, stack: error.stack });
  }
});

app.listen(PORT, () => {
  console.log(`سرور در حال اجراست روی http://localhost:${PORT}`);
});