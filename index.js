const express = require('express');
const app = express();
const path = require('path');


const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'/index.html'));

})

router.get('/banco', function (req, res) {
    res.sendFile(path.join(__dirname,'/bancoDeDados.html'));

})

router.get('/poo', function (req, res) {
    res.sendFile(path.join(__dirname,'/programacaoOrientadaObjetos.html'));

})

router.get('/htmlCssJs', function (req, res) {
    res.sendFile(path.join(__dirname,'/htmlCssJs.html'));

})

app.use('/', router);



app.listen(process.env.PORT || 3000);

console.log("Server Rodando");
