//INDEX.JS = Sobe servidor no ar

const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log("Conectado com SUCESSO")
        
        Tabelas.init(conexao);
        const app = customExpress();
        app.listen(3000, () => console.log('Servidor na porta 3000'));
    }
});