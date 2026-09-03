const express = require('express');
const db = require('./db');

const app = express();
//configuracaoes do express

app.set('view engine', 'ejs'); //trabalhar com ejs
app.use(express.static('public')); //falar onde esta o css
app.use(express.urlencoded({extended:true})); //trabalhar com formulario

app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000');
})

//linkar o dashboard.ejs com o app
app.get('/dashboard', (req,res) =>{
    res.render('dashboard', {nome: 'Lucas Alves Bernardes'})
})
