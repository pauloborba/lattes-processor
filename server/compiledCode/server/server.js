"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeServer = exports.lattes_processor_server = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer({ dest: './uploads' });
//import { Qualis } from '../common/qualis';
//import { QualisFactory } from './qualisfactory';
const pesquisadorFactory_1 = require("./pesquisadorFactory");
const cadastrogrupos_1 = require("./cadastrogrupos");
var lattes_processor_server = express();
exports.lattes_processor_server = lattes_processor_server;
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
lattes_processor_server.use(allowCrossDomain);
lattes_processor_server.use(bodyParser.json());
let cadastro_grupos = new cadastrogrupos_1.CadastroGrupos();
let lattes_factory = new pesquisadorFactory_1.LattesFactory();
cadastro_grupos.start_grupo();
//let qualis_factory : QualisFactory = new QualisFactory();
//let qualis_service : Qualis = new Qualis();start_grupo();
//adicionarQualis
lattes_processor_server.post('/qualis/adicionar', upload.single('qualisFile'), (req, res) => {
});
//removerQualis
lattes_processor_server.delete('/qualis/apagar', (req, res) => {
});
//adicionarPesquisador()
lattes_processor_server.post('/pesquisador/adicionar', (req, res) => {
});
//removerPesquisador()
lattes_processor_server.delete('/pesquisador/apagar', (req, res) => {
});
//adicionarGrupo()
lattes_processor_server.post('/grupo/adicionar', (req, res) => {
});
//removerGrupo()
lattes_processor_server.delete('/grupo/apagar', (req, res) => {
});
//listarGrupo()
lattes_processor_server.get('/grupo/lista', (req, res) => {
});
lattes_processor_server.get('/cadastrogrupos', (req, res) => {
    res.send(JSON.stringify(Array.from(cadastro_grupos.grupo)));
});
var server = lattes_processor_server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
//# sourceMappingURL=server.js.map