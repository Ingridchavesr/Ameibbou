const db = require('./db');

const Registro = {
    registrarResponsavelComCrianca: (responsavel, crianca, callback) => {
        db.query(
            "INSERT INTO responsavel (nome, email, senha_responsavel) VALUES (?, ?, ?)",
            [responsavel.email, responsavel.telefone, responsavel.senha],
            (err, result) => {
                if (err) return callback(err);
                const id_responsavel = result.insertId;
                db.query(
                    "INSERT INTO usuario (nome_usuario, idade, email, senha_usuario, id_responsavel) VALUES (?, ?, ?, ?, ?)",
                    [crianca.nome_usuario, crianca.idade, crianca.genero, crianca.hiperfoco, id_responsavel],
                    callback
                );
            }
        );
    }
};

module.exports = Registro;
