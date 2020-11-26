
declare module 'express' {
    interface Request {
      body: any // Actually should be something like `multer.Body`
      file: any // Actually should be something like `multer.Files`
    }
}

import express = require('express');
import bodyParser = require("body-parser");

const multer = require('multer');
const upload = multer({ dest: './uploads' });

import { Pesquisador } from '../common/pesquisador';
import { FormaDeAvaliacao } from '../common/formaDeAvaliacao';
//import { LattesFactory } from './lattesfactory';

import { CadastroGrupos } from './cadastrogrupos';
import { CadastroFormas } from './cadastroformas';

let lattes_processor_server = express();
lattes_processor_server.use(bodyParser.urlencoded({extended: true}))

let allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

lattes_processor_server.use(allowCrossDomain);

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

let cadastro_grupos = new CadastroGrupos();
let cadastro_formas = new CadastroFormas();
//let lattes_factory = new LattesFactory();

//let qualis_factory : QualisFactory = new QualisFactory();
//let qualis_service : Qualis = new Qualis();

//getFormas
lattes_processor_server.get('/formas', upload.single('qualisFile'), (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(cadastro_formas.getFormas()));
})

//adicionarQualis
lattes_processor_server.post('/formas/adicionar', upload.single('qualisFile'), (req: express.Request, res: express.Response) => {
    console.log({body: req.body, file: req.file});
})

//removerQualis
lattes_processor_server.delete('/formas/apagar', (req: express.Request, res: express.Response) => {
  let forma: FormaDeAvaliacao = <FormaDeAvaliacao> req.body;
  forma = cadastro_formas.remover(forma);
  if (forma.id) {
    res.send({"success": "A forma de avaliação foi removida com sucesso"});
  } else {
    res.send({"failure": "Essa forma de avaliação não existe"});
  }
})

//atualizarQualis
lattes_processor_server.put('/formas/atualizar', upload.single('qualisFile'), (req: express.Request, res: express.Response) => {
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


let server = lattes_processor_server.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

function closeServer(): void {
    server.close();
}

export { lattes_processor_server, server, closeServer }