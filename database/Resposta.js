const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define('respostas',{
    resposta:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    perguntaId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

Resposta.sync({forced:false}).then(()=>{});

module.exports = Resposta;