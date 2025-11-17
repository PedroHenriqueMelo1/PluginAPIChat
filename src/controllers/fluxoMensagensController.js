module.exports = {
  handle: (req, res) => {
    console.log('Webhook recebido:');
    console.log(req.body);

    // Aqui você depois faz a request para outro endpoint
    // exemplo:
    // await axios.post('https://url', { mensagem: 'resposta' })

    res.json({ status: 'OK', recebido: true , body: req.body});
  }
};