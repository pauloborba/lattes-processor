import express = require('express');
import bodyParser = require("body-parser");

const multer = require('multer');
const upload = multer({ dest: './uploads' });

import { Pesquisador } from '../common/pesquisador';
//import { Qualis } from '../common/qualis';
//import { QualisFactory } from './qualisfactory';
import { LattesFactory } from './pesquisadorFactory';
import { CadastroGrupos } from './cadastrogrupos';
//import { ConsoleReporter } from 'jasmine';
import {Grupo} from '../common/grupo';
//import { ConsoleReporter } from 'jasmine';

//import { ConsoleReporter } from 'jasmine';

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
//var cadastro: CadastroGrupos = new CadastroGrupos();
let lattes_factory = new LattesFactory();


//cadastro_grupos.start_grupo();

//let qualis_factory : QualisFactory = new QualisFactory();
//let qualis_service : Qualis = new Qualis();

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
lattes_processor_server.post('/cadastrogrupos/adicionar', (req: express.Request, res: express.Response) => {
  console.log("NO SERVIDOR");
  let ok : boolean;
  //console.log(req.body);
  let aa: Grupo = <Grupo> req.body;
  ok = cadastro_grupos.adicionar(aa);
  if (ok) {
    res.send({"success": "O grupo foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O grupo não pode ser cadastrado"});
  }
})

//atualizarGrupo()
lattes_processor_server.post('/cadastrogrupos/atualizar', (req: express.Request, res: express.Response) => {
  console.log("ATUALIZAR");
  //console.log(req.body);
  //console.log(req.body.a);
  //console.log(req.body.tipoAtualizacao);
  //console.log(" -- ",req.body.a.pesquisadores);
  //console.log(req.body[0]);
  //console.log(req.body[1].nomeGrupo);
  //console.log(req.body[1].pesquisadores);

  let pesq: Pesquisador[] = [];
  let ok : boolean;

  //console.log("SERVER");
  if(req.body.tipoAtualizacao == 'ADICIONAR'){
    console.log("ADICIONAR");
    let pes: Pesquisador = <Pesquisador> req.body.a.pesquisadores;
    //console.log(pes);
    ok = cadastro_grupos.atualizar(req.body.tipoAtualizacao,req.body.a.nomeGrupo,req.body.a.pesquisadores);
    if (ok) {
      res.send({"success": "O grupo foi atualizado com sucesso"});
    } else {
      res.send({"failure": "O grupo não pode ser atualizado"});
    }
  }

  else if(req.body.tipoAtualizacao == 'REMOVER'){
    console.log("REMOVER");

    ok = cadastro_grupos.atualizar(req.body.tipoAtualizacao,req.body.a.nomeGrupo,req.body.a.pesquisadores);
    ok = true;
    console.log(ok);
    if (ok) {
      res.send({"success": "O grupo foi atualizado com sucesso"});
    } else {
      res.send({"failure": "O grupo não pode ser atualizado"});
    }
   
  }
  else{
    console.log("ERRO FATAL");
  }


})

//removerGrupo()
lattes_processor_server.delete('/cadastrogrupos/remover/:nome', (req: express.Request, res: express.Response) => {
  let ok : boolean;
  console.log("+-*-+.");
  console.log(req.body);
  ok = cadastro_grupos.remover(req.params.nome);
  console.log(ok);
  if (ok) {
    res.send({"success": "O grupo foi removido com sucesso"});
  } else {
    res.send({"failure": "O grupo não pode ser removido"});
  } 
});

//listarGrupo()
lattes_processor_server.get('/cadastrogrupos', (req: express.Request, res: express.Response) => {
	res.send(JSON.stringify(Array.from(cadastro_grupos.grupo)))
 
})


var server = lattes_processor_server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { lattes_processor_server, closeServer }
