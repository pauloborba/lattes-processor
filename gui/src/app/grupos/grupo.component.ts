import { Component, OnInit , ElementRef ,Input,OnDestroy} from '@angular/core';
import { Pesquisador } from '../../../../common/pesquisador';
import { Grupo } from '../../../../common/grupo';
import { GrupoService } from './grupo.service';
//import { PesquisadoresService } from '../../app/pesquisador/pesquisadores.service';
//import { PassThrough } from 'stream';

  @Component({
   selector: 'app-grupo',
   templateUrl: './grupo.component.html',
   styleUrls: ['./grupo.component.css']
 })

 export class GrupoComponent implements OnInit {

	constructor(private grupoService: GrupoService){}

	grupo : Grupo[] = [];
	pesquisador : Pesquisador [] = [];
	grupos: Grupo[] = [];
	
	pesquisadores: Pesquisador = new Pesquisador();

	teste:{nomeGrupo: string}[] = [{"nomeGrupo":"Grupo 1"},{"nomeGrupo":"Grupo 2"},{"nomeGrupo":"Grupo 3"},{"nomeGrupo":"Grupo 4"}];
	teste2:{nomePesq: string}[] = [{"nomePesq":"P 1"},{"nomePesq":"P 2"},{"nomePesq":"P 3"},{"nomePesq":"P 4"},{"nomePesq":"P 5"},{"nomePesq":"P 6"},{"nomePesq":"P 7"}];
	
	tgp:{nomeGrupo:string,nomePesq:string[]}[] = [{"nomeGrupo":"Grupo 1","nomePesq":["P 1","P 2"]},{"nomeGrupo":"Grupo 2","nomePesq":["P 3","P 4"]},{"nomeGrupo":"Grupo 3","nomePesq":["P 5","P 6"]},{"nomeGrupo":"Grupo 4","nomePesq":["P 7"]}];

	adicionarGrupo:boolean = false;
	adicionarPesq:boolean = false;

	output_checkbox:boolean[] = [];
	output_checkbox2:boolean[] = []
	output_textbox:string = "";
/*
	ngOnInit():void{
		
		this.grupoService.getGroups().subscribe(
			a,b => {this.grupo = a;
				console.log(this.grupo);
				for(let g of this.grupo){
			this.output_checkbox.push(false);
			this.output_checkbox2.push(false);
					}
				this.output_textbox = "";	
				}
			) 
	}*/

	ngOnInit():void{
		
		this.grupoService.getGroups().subscribe(
			a => {this.grupo = a;
				//console.log(this.pesquisador);
				for(let g of this.teste2){
					this.output_checkbox.push(false);
					this.output_checkbox2.push(false);
				}
				this.output_textbox = "";	
				 }
			);

		/*this.grupoService.getPesquisadores().subscribe(
				a => {this.pesquisadores = a;
				console.log(this.pesquisador);
				for(let g of this.grupo){
					this.output_checkbox.push(false);
					this.output_checkbox2.push(false);
				}
			}) ;*/
		
		this.output_textbox = "";
	}


	//FUNCOES AUXILIARES		
	botaoAdicionar() {
		this.adicionarGrupo = !this.adicionarGrupo;
	}
	botaoAtualizar() {
		this.adicionarPesq = !this.adicionarPesq;
	}

	nomeGAtual(g:string){
		this.output_textbox = g;
		console.log(g);
	}

	cleanMerge():void{
		for(let g of this.teste2){
			let i = this.teste2.indexOf(g, 0);
			this.output_checkbox[i] = false;
			this.output_checkbox2[i] = false;
		}
		this.output_textbox = '';
	}
	
	//ESCOPO PRINCIPAL
	criarGrupo(): void{	
		let nomes_pesquisadores :string[] =[];
		let new_grupo = new Grupo();
		let pesq: Pesquisador = new Pesquisador();
		
		console.log(this.output_textbox);
		if(this.output_textbox != ""){
		//nomes_pesquisadores.push(this.output_textbox);
		
			for(let i of this.teste2){
				let objindex = this.teste2.indexOf(i, 0);
				if (this.output_checkbox[objindex] == true) {
					nomes_pesquisadores.push(i.nomePesq);
				}
			}
			console.log(nomes_pesquisadores);
			//this.tgp.push({"nomeGrupo":this.output_textbox,nomePesq:nomes_pesquisadores});
		
			for(let i of nomes_pesquisadores){
        		pesq.Nome = i;
				//pesq.Cpf = '0';
				new_grupo.pesquisadores.push(pesq);
				//console.log(new_grupo);
				pesq = new Pesquisador();
			}
			new_grupo.nomeGrupo = this.output_textbox;
		}
		else{
			console.log("Erro");
		}
		
		console.log(new_grupo);
		this.grupoService.adicionar(new_grupo).subscribe(
			ar => {
			  if (ar) {
				this.ngOnInit();
				console.log(this.grupo);

			  } else {
				console.log("NAO FOI POSSIVEL ADICIONAR UM NOVO GRUPO");
			  } 
			},
			msg => { alert("ALERTA DE ERRO"); }
		  );
		console.log("TERMINOU A EXECUACAO DA FUNCAO DE ADICIONAR NOVO GRUPO");
	}

	removerGrupo(grupoRemover:String){
		console.log(grupoRemover);
		this.grupoService.remover(grupoRemover).subscribe(
			ar => {
			  if (ar) {
				this.ngOnInit();
				console.log(this.grupo);

			  } else {
				console.log("NAO FOI POSSIVEL REMOVER O GRUPO");
			  } 
			},
			msg => { alert("ALERTA DE ERRO"); }
		  );
		//this.teste = this.teste.filter(item => item.nomeGrupo !== grupoRemover);
		console.log(this.teste);
	}

	atualizarGrupo(tipoAtualizacao:string):void{
		let nomes_pesquisadores :string[] =[];
		let new_grupo = new Grupo();
		let pesq: Pesquisador = new Pesquisador();

		console.log(this.output_textbox);
		if(this.output_textbox != ""){
			//nomes_pesquisadores.push(this.output_textbox);

			if(tipoAtualizacao == "ADICIONAR"){
				for(let i of this.teste2){
					let objindex = this.teste2.indexOf(i, 0);
					if (this.output_checkbox[objindex] == true) {
						nomes_pesquisadores.push(i.nomePesq);
					}
				}
			}
			else if(tipoAtualizacao == 'REMOVER'){
				for(let i of this.teste2){
					let objindex = this.teste2.indexOf(i, 0);
					if (this.output_checkbox2[objindex] == true) {
						nomes_pesquisadores.push(i.nomePesq);
					}
				}
			}
			else{
				console.log("Erro de atualizacao");
			}	

			for(let i of nomes_pesquisadores){
        		pesq.Nome = i;
				//pesq.Cpf = '0';
				new_grupo.pesquisadores.push(pesq);
				//console.log(new_grupo);
				pesq = new Pesquisador();
			}

			new_grupo.nomeGrupo = this.output_textbox;
			pesq = new Pesquisador();
			
			console.log(tipoAtualizacao + " - " + new_grupo.pesquisadores);
			this.grupoService.atualizar(tipoAtualizacao,new_grupo).subscribe(
				ar => {
				  if (ar) {
					this.ngOnInit();
					//console.log(this.grupo);
	
				  } else {
					console.log("NAO FOI POSSIVEL ATUALIZAR O GRUPO");
				  } 
				},
				msg => { alert("ALERTA DE ERRO"); }
			  );
		}
		else{
			console.log("Erro");
		}
	}

	

 }