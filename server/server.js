"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var multer = require('multer');
var upload = multer({ dest: './uploads' });
//import { LattesFactory } from './lattesfactory';
var cadastrogrupos_1 = require("./cadastrogrupos");
var cadastroformas_1 = require("./cadastroformas");
var lattes_processor_server = express();
exports.lattes_processor_server = lattes_processor_server;
lattes_processor_server.use(bodyParser.urlencoded({ extended: true }));
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
lattes_processor_server.use(allowCrossDomain);
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
var cadastro_grupos = new cadastrogrupos_1.CadastroGrupos();
var cadastro_formas = new cadastroformas_1.CadastroFormas();
//let lattes_factory = new LattesFactory();
//let qualis_factory : QualisFactory = new QualisFactory();
//let qualis_service : Qualis = new Qualis();
//getFormas
lattes_processor_server.get('/formas', upload.single('qualisFile'), function (req, res) {
    res.send(JSON.stringify(cadastro_formas.getFormas()));
});
//adicionarQualis
lattes_processor_server.post('/formas/adicionar', upload.single('qualisFile'), function (req, res) {
    console.log({ body: req.body, file: req.file });
});
//removerQualis
lattes_processor_server["delete"]('/formas/apagar', function (req, res) {
    var forma = req.body;
    forma = cadastro_formas.remover(forma);
    if (forma.id) {
        res.send({ "success": "A forma de avaliação foi removida com sucesso" });
    }
    else {
        res.send({ "failure": "Essa forma de avaliação não existe" });
    }
});
//atualizarQualis
lattes_processor_server.put('/formas/atualizar', upload.single('qualisFile'), function (req, res) {
});
//adicionarPesquisador()
lattes_processor_server.post('/pesquisador/adicionar', function (req, res) {
});
//removerPesquisador()
lattes_processor_server["delete"]('/pesquisador/apagar', function (req, res) {
});
//adicionarGrupo()
lattes_processor_server.post('/grupo/adicionar', function (req, res) {
});
//removerGrupo()
lattes_processor_server["delete"]('/grupo/apagar', function (req, res) {
});
//listarGrupo()
lattes_processor_server.get('/grupo/lista', function (req, res) {
});
var server = lattes_processor_server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
exports.server = server;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
