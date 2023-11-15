const database = require('./database')

const Usuarios = database.sequelize.define('usuarios',{
    nome:{
        type: database.Sequelize.STRING
    },
    email:{
        type: database.Sequelize.STRING
    },
    senha:{
        type: database.Sequelize.STRING
    }
})
//  Usuarios.sync({force: true})
// export default Usuarios 
module.exports = Usuarios