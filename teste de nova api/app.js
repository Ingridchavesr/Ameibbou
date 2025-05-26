const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const registroRoute = require('./routes/registroRoute');
const usuarioRoutes = require('./routes/usuarioRoutes');

app.use(cors());
app.use(express.json());

app.use('/registrar', registroRoute);
app.use('/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
