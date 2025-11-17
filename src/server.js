const express = require('express');
const app = express();

// middleware para receber JSON do webhook
app.use(express.json());

// rotas
const fluxoMensagensController = require('./controllers/fluxoMensagensController');
app.post('/api/FluxoMensagens', fluxoMensagensController.handle);

app.listen(4444, () => {
  console.log('API inicializada na porta 4444');
});
