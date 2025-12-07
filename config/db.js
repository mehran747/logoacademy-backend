// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // فقط پیام ساده بدون رنگ
    console.log(`MongoDB متصل شد: ${conn.connection.host}`);
  } catch (error) {
    console.error(`خطا در اتصال به دیتابیس: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;