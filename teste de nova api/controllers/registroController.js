const Registro = require('../models/registroModel');

exports.registrar = (req, res) => {
    const { responsavel, crianca } = req.body;
    Registro.registrarResponsavelComCrianca(responsavel, crianca, (err, result) => {
        if (err) return res.status(500).send("Erro ao registrar.");
        res.send("Responsável e criança cadastrados com sucesso.");
    });
};
