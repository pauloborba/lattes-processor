"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeServer = exports.lattes_processor_server = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer({ dest: './uploads' });
const grupo_1 = require("../common/grupo");
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
//mergeGrupos
lattes_processor_server.post('/cadastrogrupos/adicionar', (req, res) => {
    let ok = true;
    console.log(req.body);
    let new_grupo = new grupo_1.Grupo;
    new_grupo.nomeGrupo = req.body[0];
    // valida se ja existe um grupo cadastrado com o mesmo nome
    for (let i of cadastro_grupos.grupo) {
        let nameIndex = cadastro_grupos.grupo.indexOf(i, 0);
        if (cadastro_grupos.grupo[nameIndex].nomeGrupo === new_grupo.nomeGrupo) {
            console.log("ja existe um grupo com mesmo nome (validacao no servidor)");
            res.send({ failure: "" });
        }
    }
    //incializa new_grupo com todos os pesquisadores contidos no grupo indicado por req.body[1]
    for (let i = 0; i < cadastro_grupos.grupo.length; i++) {
        if (cadastro_grupos.grupo[i].nomeGrupo == req.body[1]) {
            for (let j = 0; j < cadastro_grupos.grupo[i].pesquisadores.length; j++) {
                new_grupo.pesquisadores[j] = cadastro_grupos.grupo[i].pesquisadores[j];
            }
            break;
        }
    }
    for (let i = 2; i < req.body.length; i++) {
        for (let j = 0; j < cadastro_grupos.grupo.length; j++) {
            if (cadastro_grupos.grupo[j].nomeGrupo == req.body[i]) {
                for (let k = 0; k < cadastro_grupos.grupo[j].pesquisadores.length; k++) {
                    for (let l = 0; l < new_grupo.pesquisadores.length; l++) {
                        if (cadastro_grupos.grupo[j].pesquisadores[k].Cpf == new_grupo.pesquisadores[l].Cpf) {
                            ok = false;
                        }
                    }
                    if (ok == true) {
                        new_grupo.pesquisadores.push(cadastro_grupos.grupo[j].pesquisadores[k]);
                    }
                    ok = true;
                }
            }
        }
    }
    cadastro_grupos.grupo.push(new_grupo);
    res.send({ success: true });
});
//listarGrupo()
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