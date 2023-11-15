const express = require("express")
const app = express();
const bodyParser = require('body-parser');
const usuarios = require('./Usuarios');
const Handlebars = require("handlebars");

app.set('view engine')

//configurações
//configurações
    //conexão
    // const sequelize = new Sequelize('formulario_cadastro', 'root', 'root', {
    //     host: "localhost",
    //     dialect: "mysql"
    // })
    //bodyparse
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/dados',(req, res) => {

    usuarios.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }).then(function(){
        res.redirect('/home')
    }).catch(function(erro){
        res.send('houve um erro: '+ erro)
    })
})

app.get('/home', function(req, res){
    usuarios.findAll().then(function(user){
        res.render('home',{nome:"victor"})
    })
    
})

app.listen(8081, () => {
    console.log('Server rodando ')
});
