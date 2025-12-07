// data/seedCourses.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Course from '../models/Course.js';
import connectDB from '../config/db.js';

dotenv.config();
connectDB();

const courses = [
  // 1. React (قبلی)
  {
    id: 1,
    title: "دوره جامع React و از صفر تا حرفه‌ای",
    subtitle: "تبدیل شو به یک توسعه‌دهنده فرانت‌اند حرفه‌ای با پروژه واقعی",
    students: 2847,
    duration: "۸۰ ساعت",
    level: "مبتدی تا پیشرفته",
    price: "۲,۴۹۰,۰۰۰ تومان",
    tags: ["React", "Redux", "Next.js", "پروژه محور"],
    poster: "/images/react-poster.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "در این دوره شما از صفر تا صد React رو یاد می‌گیرید و در انتها یک فروشگاه کامل با پنل مدیریت می‌سازید.",
    syllabus: [
      { title: "مقدمه و نصب ابزارها", desc: "آشنایی با Vite، ESLint، Prettier و ساختار پروژه" },
      { title: "JSX و کامپوننت‌ها", desc: "ساخت کامپوننت‌های تابع و کلاس" },
      { title: "Hooks کامل", desc: "useState, useEffect, useContext, useReducer و ..." },
      { title: "React Query و API", desc: "اتصال به بک‌اند و مدیریت داده‌های سرور" },
      { title: "پروژه نهایی: فروشگاه آنلاین", desc: "سبد خرید، پنل ادمین، پرداخت آنلاین" },
    ],
    faqs: [
      { q: "آیا پیش‌نیاز داره؟", a: "فقط HTML، CSS و JavaScript پایه کافیه." },
      { q: "گواهینامه داره؟", a: "بله، گواهینامه معتبر دریافت می‌کنید." },
    ],
  },

  // 2. HTML + CSS + Tailwind
  {
    id: 2,
    title: "دوره حرفه‌ای HTML + CSS + Tailwind",
    subtitle: "از صفر تا طراحی سایت‌های مدرن و ریسپانسیو",
    students: 5123,
    duration: "۵۰ ساعت",
    level: "مبتدی",
    price: "۱,۶۹۰,۰۰۰ تومان",
    tags: ["HTML", "CSS", "Tailwind", "ریسپانسیو"],
    poster: "/images/htmlcss-poster.jpg",
    video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
    description: "یادگیری کامل ساختار وب، انیمیشن، فلکس و گرید، و طراحی فوق سریع با Tailwind CSS.",
    syllabus: [
      { title: "مقدمه HTML5", desc: "تگ‌ها، سمنتیک، فرم‌ها" },
      { title: "CSS پیشرفته", desc: "Flexbox، Grid، انیمیشن، متغیرها" },
      { title: "Tailwind CSS از صفر", desc: "کلاس‌ها، تم، پلاگین‌ها" },
      { title: "پروژه: طراحی ۵ لندینگ پیج حرفه‌ای", desc: "شامل انیمیشن و ریسپانسیو کامل" },
    ],
    faqs: [
      { q: "آیا نیاز به تجربه قبلی داره؟", a: "خیر، کاملاً از صفر شروع میشه." },
    ],
  },

  // 3. دوره جامع JavaScript
  {
    id: 3,
    title: "دوره کامل JavaScript (ES6+)",
    subtitle: "مسلط شو به مهم‌ترین زبان وب",
    students: 8921,
    duration: "۷۰ ساعت",
    level: "مبتدی تا پیشرفته",
    price: "۲,۱۹۰,۰۰۰ تومان",
    tags: ["JavaScript", "ES6", "DOM", "Async/Await"],
    poster: "/images/js-poster.jpg",
    video: "https://www.youtube.com/embed/PkZNo7MFNFg",
    description: "از متغیر تا Promise، Async/Await، DOM، Event، پروژه‌های واقعی.",
    syllabus: [
      { title: "متغیرها و توابع", desc: "var, let, const, Arrow Function" },
      { title: "آرایه و آبجکت پیشرفته", desc: "Destructuring, Spread, Map, Filter" },
      { title: "کار با DOM", desc: "انتخاب المان، تغییر محتوا، رویدادها" },
      { title: "برنامه‌نویسی ناهمگام", desc: "Promise, Async/Await, Fetch API" },
    ],
    faqs: [
      { q: "آیا پروژه عملی داره؟", a: "بله، ساخت To-Do List، ماشین حساب، گالری عکس و ..." },
    ],
  },

  // 4. وردپرس حرفه‌ای
  {
    id: 4,
    title: "دوره وردپرس از صفر تا سایت فروشگاهی",
    subtitle: "بدون کدنویسی، سایت حرفه‌ای بساز",
    students: 12450,
    duration: "۶۰ ساعت",
    level: "مبتدی تا متوسط",
    price: "۱,۸۹۰,۰۰۰ تومان",
    tags: ["وردپرس", "ووکامرس", "المنتور", "سئو"],
    poster: "/images/wordpress-poster.jpg",
    video: "https://www.youtube.com/embed/8J5aQ4K5Z8U",
    description: "نصب وردپرس، قالب، افزونه، المنتور، ووکامرس، امنیت و سئو.",
    syllabus: [
      { title: "نصب و راه‌اندازی", desc: "هاست، دامین، نصب وردپرس" },
      { title: "کار با المنتور", desc: "طراحی صفحات بدون کد" },
      { title: "فروشگاه با ووکامرس", desc: "محصول، درگاه پرداخت، ارسال" },
      { title: "سئو و امنیت", desc: "افزونه‌های ضروری و بهینه‌سازی" },
    ],
    faqs: [
      { q: "آیا قالب اختصاصی یاد می‌گیرم؟", a: "بله، نحوه ساخت قالب با المنتور پرو رو هم یاد می‌گیری." },
    ],
  },

  // 5. PHP + Laravel
  {
    id: 5,
    title: "دوره کامل PHP و Laravel",
    subtitle: "بک‌اند حرفه‌ای با فریم‌ورک قدرتمند",
    students: 3872,
    duration: "۱۲۰ ساعت",
    level: "متوسط تا پیشرفته",
    price: "۳,۹۹۰,۰۰۰ تومان",
    tags: ["PHP", "Laravel", "API", "پروژه محور"],
    poster: "/images/laravel-poster.jpg",
    video: "https://www.youtube.com/embed/123456789",
    description: "از سینتکس PHP تا ساخت API کامل با Laravel و پروژه فروشگاه.",
    syllabus: [
      { title: "PHP پایه و OOP", desc: "متغیر، حلقه، کلاس، وراثت" },
      { title: "Laravel از صفر", desc: "Routing, Blade, Eloquent" },
      { title: "احراز هویت", desc: "Laravel Sanctum و JWT" },
      { title: "پروژه نهایی: پنل مدیریت + API", desc: "با Vue/React فرانت‌اند" },
    ],
    faqs: [],
  },

  // 6 تا 10: دوره‌های کنکوری
  { id: 6, title: "دوره جامع ریاضی کنکور انسانی", students: 9876, duration: "۱۰۰ ساعت", level: "کنکور", price: "۱,۹۹۰,۰۰۰ تومان", tags: ["کنکور", "ریاضی", "انسانی"], poster: "/images/math-human.jpg", video: "https://www.youtube.com/embed/math1", description: "کامل‌ترین دوره ریاضی انسانی با حل تست‌های ۱۰ سال اخیر.", syllabus: [], faqs: [] },
  { id: 7, title: "دوره طلایی فیزیک کنکور تجربی", students: 11234, duration: "۱۱۰ ساعت", level: "کنکور", price: "۲,۲۹۰,۰۰۰ تومان", tags: ["کنکور", "فیزیک", "تجربی"], poster: "/images/physics.jpg", video: "https://www.youtube.com/embed/physics", description: "فیزیک تجربی با تدریس مفهومی و تستی.", syllabus: [], faqs: [] },
  { id: 8, title: "زیست‌شناسی کنکور با رتبه‌های برتر", students: 15678, duration: "۱۳۰ ساعت", level: "کنکور", price: "۲,۶۹۰,۰۰۰ تومان", tags: ["کنکور", "زیست", "تجربی"], poster: "/images/biology.jpg", video: "https://www.youtube.com/embed/bio", description: "زیست ترکیبی و مفهومی + تست‌های طبقه‌بندی شده.", syllabus: [], faqs: [] },
  { id: 9, title: "شیمی کنکور تجربی و ریاضی", students: 9234, duration: "۹۰ ساعت", level: "کنکور", price: "۲,۰۹۰,۰۰۰ تومان", tags: ["کنکور", "شیمی"], poster: "/images/chemistry.jpg", video: "https://www.youtube.com/embed/chem", description: "شیمی کامل با حل مسائل و تست‌های ترکیبی.", syllabus: [], faqs: [] },
  { id: 10, title: "دوره جمع‌بندی کنکور تجربی ۱۴۰۵", students: 18923, duration: "۸۰ ساعت", level: "جمع‌بندی", price: "۱,۶۹۰,۰۰۰ تومان", tags: ["کنکور", "تجربی", "جمع‌بندی"], poster: "/images/konkor.jpg", video: "https://www.youtube.com/embed/konkor", description: "مرور سریع + تست‌های شبیه‌ساز + تکنیک‌های تست‌زنی.", syllabus: [], faqs: [] },
];

const importData = async () => {
  try {
    await Course.deleteMany();
    await Course.insertMany(courses);
    console.log('دوره‌ها با موفقیت اضافه شدن!');
    process.exit();
  } catch (error) {
    console.log('خطا:', error.message);
    process.exit(1);
  }
};

importData();