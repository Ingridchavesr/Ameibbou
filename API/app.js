const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const responsavelRoutes = require('./routes/responsavelRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', responsavelRoutes);

app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:${PORT}');
});