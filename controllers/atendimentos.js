//ATENDIMENTOS = Controlar ações e rotas

const Atendimento = require("../models/atendimentos")

//exportando
module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de ATENDIMENTOS! (Realizando um GET)'));
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    });
};