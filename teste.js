const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    pontuação: {
        type: Sequelize.INTEGER
    }
})

// Usuario.sync({force: true})

// Usuario.create({
//     nome: "rafael",
//     pontuação: 20
// })

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso")
}).catch(function(erro){
    console.log("falha ao se conectar: "+erro)
})