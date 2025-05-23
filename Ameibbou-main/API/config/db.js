const mysql = require('mysql12');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ameibbou'
});

db.connect(err => {
    if(err){
        console.error('Erro ao conectar no banco:', err);
    } else{
        console.log('Banco de dados conectado');
    }
});

module.exports = db;