const Sequelize  = require("sequelize");

//configurações
    //conexão
    const sequelize = new Sequelize('formulario_cadastro', 'root', 'root', {
        host: "localhost",
        dialect: "mysql"
    })

    
    module.exports = {Sequelize,sequelize};