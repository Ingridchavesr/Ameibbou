const db = require('./db');

const Usuario = {
    getAll: (callback) => {
        db.query("SELECT * FROM usuario", callback);
    }
};

module.exports = Usuario;
