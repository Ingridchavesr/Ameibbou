const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET = 'cb97';

exports.register = async (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Preencha todos os campos!' });
  }

  const senhaCriptografada = await bcrypt.hash(senha, 8);
  db.query(
    'INSERT INTO responsavel (nome, email, senha_responsavel) VALUES (?, ?, ?)',
    [nome, email, senhaCriptografada],
    (err) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).json({ erro: 'Email já cadastrado!' });
        }
        return res.status(500).json({ erro: err.message });
      }
      res.status(201).json({ mensagem: 'Responsável registrado com sucesso!' });
    }
  );
};

exports.login = (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ erro: 'Preencha todos os campos!' });
  }

  db.query('SELECT * FROM responsavel WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ erro: err.message });

    if (results.length === 0) {
      return res.status(401).json({ erro: 'Email não encontrado!' });
    }

    const responsavel = results[0];
    const senhaCorreta = await bcrypt.compare(senha, responsavel.senha_responsavel);

    if (!senhaCorreta) return res.status(401).json({ erro: 'Senha incorreta!' });

    const token = jwt.sign({ id: responsavel.id_responsavel }, SECRET, { expiresIn: '1d' });

    res.json({
      mensagem: 'Login bem-sucedido!',
      responsavel: {
        id: responsavel.id_responsavel,
        nome: responsavel.nome,
        email: responsavel.email
      },
      token
    });
  });
};