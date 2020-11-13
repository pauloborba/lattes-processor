import express = require('express');
import bodyParser = require("body-parser");

const multer = require('multer');
const upload = multer({ dest: './uploads' });

import { Pesquisador } from '../common/pesquisador';
import { Qualis } from '../common/qualis';
import { QualisFactory } from './qualisfactory';
import { LattesFactory } from './lattesfactory';
import { CadastroGrupos } from './cadastrogrupos';

var lattes_processor_server = express();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

lattes_processor_server.use(allowCrossDomain);
lattes_processor_server.use(bodyParser.json());

let cadastro_grupos = new CadastroGrupos();
let lattes_factory = new LattesFactory();

let qualis_factory : QualisFactory = new QualisFactory();
let qualis_service : Qualis = new Qualis();

//adicionarQualis
lattes_processor_server.post('/qualis/adicionar', upload.single('qualisFile'), (req: express.Request, res: express.Response) => {
})

//removerQualis
lattes_processor_server.delete('/qualis/apagar', (req: express.Request, res: express.Response) => {

})

//adicionarPesquisador()
lattes_processor_server.post('/pesquisador/adicionar', (req: express.Request, res: express.Response) => {

})

//removerPesquisador()
lattes_processor_server.delete('/pesquisador/apagar', (req: express.Request, res: express.Response) => {

})

//adicionarGrupo()
lattes_processor_server.post('/grupo/adicionar', (req: express.Request, res: express.Response) => {

})

//removerGrupo()
lattes_processor_server.delete('/grupo/apagar', (req: express.Request, res: express.Response) => {

})

//listarGrupo()
lattes_processor_server.get('/grupo/lista', (req: express.Request, res: express.Response) => {
	
})


function closeServer(): void {
  server.close();
}