
// File: middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET="AMINAKHTER"
module.exports = (roles = []) => {
  return (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
      const decoded = jwt.verify(token,JWT_SECRET);
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ msg: 'Access denied' });
      }
      req.user = decoded;
      next();
    } catch {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  };
};