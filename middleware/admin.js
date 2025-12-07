// middleware/admin.js
export const adminOnly = (req, res, next) => {
  console.log('نقش کاربر:', req.user.role); // برای دیباگ
  if (!req.user) {
    return res.status(401).json({ message: 'ابتدا وارد شوید' });
  }
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'دسترسی ممنوع — فقط ادمین' });
  }
  next();
};
