import express = require('express');
import bodyParser = require("body-parser");

const multer = require('multer');
const upload = multer({ dest: './uploads' });
const fs = require('fs');

import { Pesquisador } from '../common/pesquisador';
//import { Qualis } from '../common/qualis';
//import { QualisFactory } from './qualisfactory';
import { LattesFactory } from './pesquisadorFactory';
import { Pesquisadores } from './pesquisadores';
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

let pesquisadores = new Pesquisadores();
let lattes_factory = new LattesFactory(pesquisadores);

//let qualis_factory : QualisFactory = new QualisFactory();
//let qualis_service : Qualis = new Qualis();

//adicionarQualis
lattes_processor_server.post('/qualis/adicionar', upload.single('qualisFile'), (req: express.Request, res: express.Response) => {
})

//removerQualis
lattes_processor_server.delete('/qualis/apagar', (req: express.Request, res: express.Response) => {

})

//adicionarPesquisador()
lattes_processor_server.post('/pesquisador/adicionar', upload.array('lattesFiles', 12), (req: express.Request, res: express.Response) => {
  let error = false;
  let add;
  for(let i = 0; i < req.files.length; i++) {
    let xml_string = fs.readFileSync(req.files[i].path, 'binary');
    let p =  lattes_factory.getObjetoFabricado(xml_string);
    if(p === null) {
      error = true;
    } else {
      add = pesquisadores.adicionar(p)
    }
  }

  if(!error) {
    if (add){
      res.send({
        success: 'Pesquisador adicionado com sucesso',
      })
    } else {
      res.send({
        failure: 'O pesquisador já existe na base de dados',
      })
    }
    

    return;
  }

  res.send({
    failure: 'Erro ao adicionar o pesquisador',
  })

})

lattes_processor_server.post('/pesquisador/atualizar', upload.array('lattesFiles', 12), (req: express.Request, res: express.Response) => {
  let error = false;
  let add;
  for(let i = 0; i < req.files.length; i++) {
    let xml_string = fs.readFileSync(req.files[i].path, 'binary');
    let p =  [].concat(lattes_factory.getObjetoFabricado(xml_string));
    if(p === null) {
      error = true;
    } else {
      error = !pesquisadores.atualizar(p[0])
    }
  }

  if(error) {
    res.send({
      failure: 'Erro ao atualizar o pesquisador',
    })
    return;
  }
  res.send({
    success: 'Pesquisador adicionado com sucesso',
  })

})

//listarPesquisadores()
lattes_processor_server.get('/pesquisador', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(Array.from(pesquisadores.Pesquisadores)));
})

//removerPesquisador()
lattes_processor_server.post('/pesquisador/apagar', (req: express.Request, res: express.Response) => {
  if(pesquisadores.remover(req.body.cpf)){
    res.send({
      success: 'Pesquisador apagado com sucesso',
    })
    return;
  }else {
    res.send({
      failure: 'Erro ao apagar o pesquisador',
    })
  }
  
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


var server = lattes_processor_server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { lattes_processor_server, closeServer }