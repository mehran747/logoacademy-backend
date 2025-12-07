// logoacademy-backend/data/createAdmin.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import connectDB from '../config/db.js';

dotenv.config();
connectDB();

const createSingleAdmin = async () => {
  try {
    console.log('در حال بررسی و ایجاد ادمین...');

    // ۱. همه ادمین‌های قبلی رو پاک کن
    const deleted = await User.deleteMany({ role: 'admin' });
    if (deleted.deletedCount > 0) {
      console.log(`${deleted.deletedCount} ادمین قبلی حذف شد.`);
    }

    // ۲. هش کردن رمز عبور
    const hashedPassword = await bcrypt.hash('admin123', 12);

    // ۳. ساخت ادمین جدید (همیشه یکتا و ثابت)
    const admin = new User({
      name: 'ادمین لوگوآکادمی',
      email: 'admin@logoacademy.ir',
      password: hashedPassword,
      phone: '09123456789',
      role: 'admin',
    });

    await admin.save();

    console.log('ادمین با موفقیت ایجاد شد!');
    console.log('ایمیل: admin@logoacademy.ir');
    console.log('رمز عبور: admin123');
    console.log('حالا همیشه فقط یک ادمین وجود داره');

    process.exit(0);
  } catch (error) {
    console.error('خطا در ایجاد ادمین:', error.message);
    process.exit(1);
  }
};

// اجرا
createSingleAdmin();