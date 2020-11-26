import express = require('express');
import bodyParser = require("body-parser");

const multer = require('multer');
const upload = multer({ dest: './uploads' });

import { Pesquisador } from '../common/pesquisador';
import { Grupo } from '../common/grupo';
//import { Qualis } from '../common/qualis';
//import { QualisFactory } from './qualisfactory';
import { LattesFactory } from './pesquisadorFactory';
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


cadastro_grupos.start_grupo();

//let qualis_factory : QualisFactory = new QualisFactory();
//let qualis_service : Qualis = new Qualis();start_grupo();

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

//mergeGrupos
lattes_processor_server.post('/cadastrogrupos/adicionar',(req: express.Request, res: express.Response) => {
	let ok = true;
	console.log(req.body);
	let new_grupo = new Grupo;
	new_grupo.nomeGrupo = req.body[0];
	

	// valida se ja existe um grupo cadastrado com o mesmo nome
	for(let i of cadastro_grupos.grupo){ 
		let nameIndex = cadastro_grupos.grupo.indexOf(i,0);

		if(cadastro_grupos.grupo[nameIndex].nomeGrupo == new_grupo.nomeGrupo){
			console.log("Ja existe um grupo com mesmo nome (validacao no servidor)");
			res.send({failure:""});
			return;
		}
	}
	
	 // valida se o nome do grupo nao esta vazio
	if( req.body[0] == null){
		console.log("Nome invalido (vazio) para criacao de grupo (validacao no servidor)");
		res.send({failure:""});
		return;

	}
	 // valida se o nome do grupo nao e composto apenas de espacos
	if( req.body[0].replace(/\s/g,'').length == 0){
		console.log("Nome invalido (apenas espacos em branco) para criacao de grupo (validacao no servidor)");
		res.send({failure:""});
		return;

	}
	
	// valida se mais de um grupo foi escolhido
	if(req.body.length < 3){
		console.log("Apenas um grupo selecionado para merge (validacao no servidor)");
		res.send({failure:""});
		return;
	}
	

	 	
 	//incializa new_grupo com todos os pesquisadores contidos no grupo indicado por req.body[1]
	for(let i = 0;i< cadastro_grupos.grupo.length;i++){

		if(cadastro_grupos.grupo[i].nomeGrupo == req.body[1]){

			for(let j=0;j < cadastro_grupos.grupo[i].pesquisadores.length;j++){

				new_grupo.pesquisadores[j] = cadastro_grupos.grupo[i].pesquisadores[j];
			}

			break;
		}
	}	


	for(let i=2; i < req.body.length; i++){

		for(let j=0; j < cadastro_grupos.grupo.length; j++){

			if(cadastro_grupos.grupo[j].nomeGrupo == req.body[i]){

				for(let k=0; k < cadastro_grupos.grupo[j].pesquisadores.length;k++){

					for(let l=0; l < new_grupo.pesquisadores.length;l++){

						if(cadastro_grupos.grupo[j].pesquisadores[k].Cpf == new_grupo.pesquisadores[l].Cpf){
							
							ok = false;
						}
						
					}

					if(ok == true){
						
						new_grupo.pesquisadores.push(cadastro_grupos.grupo[j].pesquisadores[k]);
					}

					ok = true;
				}
			}

		}

	}
	//cadastro_grupos.grupo.push(new_grupo);
	cadastro_grupos.adicionar(new_grupo);
	res.send({success:true});
	
})

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