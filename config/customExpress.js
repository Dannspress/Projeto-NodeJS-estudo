//CUSTOMEXPRESS = Configurações/Modificações

//bibliotecas
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    //importando
    consign()
        .include('controllers')
        .into(app)

    return app;
};