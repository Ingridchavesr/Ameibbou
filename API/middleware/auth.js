const jwt = require('jsonwebtoken');
const SECRET = 'cb97';

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).json({ erro: 'Token não fornecido!' });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ erro: 'Token inválido!' });

    req.userId = decoded.id;
    next();
  });
};