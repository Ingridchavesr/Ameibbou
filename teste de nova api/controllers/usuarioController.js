const Usuario = require('../models/usuarioModel');

exports.getAll = (req, res) => {
    Usuario.getAll((err, results) => {
        if (err) return res.status(500).send("Erro ao buscar usuários.");
        res.json(results);
    });
};
