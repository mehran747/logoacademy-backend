// // controllers/authController.js
// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// // ثبت نام
// export const register = async (req, res) => {
//   const { name, email, password, phone } = req.body;

//   try {
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ message: 'این ایمیل قبلا ثبت شده' });

//     const hashedPassword = await bcrypt.hash(password, 12);
//     user = new User({ name, email, password: hashedPassword, phone });
//     await user.save();

//     // در login و register
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET || 'fallback_secret',
//       { expiresIn: '7d' }
//     );

//     res.status(201).json({
//       token,
//       user: { id: user._id, name: user.name, email: user.email, phone: user.phone }
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'خطا در سرور' });
//   }
// };

// // لاگین
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'ایمیل یا رمز اشتباه است' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'ایمیل یا رمز اشتباه است' });

//     // const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '7d' });
//     const token = jwt.sign(
//       { 
//         id: user._id, 
//         name: user.name, 
//         email: user.email,
//         role: user.role  // ← این خط رو اضافه کن!
//       },
//       process.env.JWT_SECRET || 'fallback_secret',
//       { expiresIn: '7d' }
//     );

//     res.json({
//       token,
//       user: { id: user._id, name: user.name, email: user.email, phone: user.phone }
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'خطا در سرور' });
//   }
// };



// controllers/authController.js
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// ثبت نام
export const register = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'این ایمیل قبلا ثبت شده' });

    const hashedPassword = await bcrypt.hash(password, 12);
    user = new User({ name, email, password: hashedPassword, phone });
    await user.save();

    const token = jwt.sign(
      { 
        id: user._id, 
        name: user.name,
        email: user.email,
        role: user.role  // ← در توکن باشه
      },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '7d' }
    );

    // ← اینجا نقش رو حتماً بفرست!
    res.status(201).json({
      token,
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        phone: user.phone,
        role: user.role  // ← این خط حیاتی بود!
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'خطا در سرور' });
  }
};

// لاگین
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'ایمیل یا رمز اشتباه است' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'ایمیل یا رمز اشتباه است' });

    const token = jwt.sign(
      { 
        id: user._id, 
        name: user.name,
        email: user.email,
        role: user.role  // ← در توکن باشه
      },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '7d' }
    );

    // ← اینجا نقش رو حتماً بفرست!
    res.json({
      token,
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        phone: user.phone || null,
        role: user.role  // ← این خط نبود و همه چیز خراب بود!
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'خطا در سرور' });
  }
};