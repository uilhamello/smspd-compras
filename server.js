const express = require('express');
const userRoutes = require('./routes/produto');

const app = express();

app.use(userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});