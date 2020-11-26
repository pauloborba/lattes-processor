import { Grupo } from  '../common/grupo';
import { Pesquisador } from '../common/pesquisador';
 
export class CadastroGrupos {
	grupo: Grupo[] = [];

	/*start_grupo(){
		let new_grupo = new Grupo();
		
		let pesq: Pesquisador = new Pesquisador();
        pesq.Nome = 'Joao';
		pesq.Cpf = '11111111111';
		new_grupo.pesquisadores.push(pesq);
       	pesq = new Pesquisador();
       	pesq.Nome = "Michael";
       	pesq.Cpf = "22222222222";
       	new_grupo.pesquisadores.push(pesq);
	
       	new_grupo.nomeGrupo = "Voxar"   	   
		this.grupo.push(new_grupo);
		
		new_grupo = new Grupo();
		pesq = new Pesquisador();
        pesq.Nome = 'Joao';
		pesq.Cpf = '11111111111';
		new_grupo.pesquisadores.push(pesq);
       	pesq = new Pesquisador();
       	pesq.Nome = "Michael";
       	pesq.Cpf = "22222222222";
       	new_grupo.pesquisadores.push(pesq);
	
       	new_grupo.nomeGrupo = "GRUPO 2"   	   
		this.grupo.push(new_grupo);

		new_grupo = new Grupo();
		pesq = new Pesquisador();
        pesq.Nome = 'asadsd';
		pesq.Cpf = '5565665665';
		new_grupo.pesquisadores.push(pesq);
       	pesq = new Pesquisador();
       	pesq.Nome = "DFSFFFSD";
       	pesq.Cpf = "899898989";
       	new_grupo.pesquisadores.push(pesq);
	
       	new_grupo.nomeGrupo = "Grupo de Pesquisa"   	   
		this.grupo.push(new_grupo);
	}*/
 
	adicionar(b: Grupo): boolean {
		if(1){this.grupo.push(b);
 
		return true;
		}
		else return false;
	}
 
	remover(nomeGrupo: String): boolean {
		/*for (let i of this.grupo){
			if(i.nomeGrupo == nomeGrupo){
				let index = this.grupo.indexOf(i,0);
				this.grupo.splice(index,1);
				return true;
			}
		}*/
		this.grupo = this.grupo.filter(item => item.nomeGrupo !== nomeGrupo);
		return true;
	}
 
	atualizar(tipo: string, a: String, pesquisador: Pesquisador[]): boolean{
		//Seleciono a chave especifica e atualizo os valores
		if(tipo == "ADICIONAR"){
			for(let i of this.grupo){
				
				if(i.nomeGrupo == a){
					let obj = this.grupo.indexOf(i, 0);
					for(let j of pesquisador){
						this.grupo[obj].pesquisadores.push(j);
					}
					
					return true;
				}
			}
		}
		else if(tipo == "REMOVER"){
			for(let i of this.grupo){
				console.log("--" + i.nomeGrupo);
				console.log(i.pesquisadores);
				if(i.nomeGrupo == a){
				  console.log(i.nomeGrupo);
				  //let pesq = new Pesquisador();
				 
				  for(let j of i.pesquisadores){
					//console.log("+ " + j.Nome);
					for(let k of pesquisador){
					  //console.log("//" + k );
					  if(j.Nome == k.Nome){
						let objindex = i.pesquisadores.indexOf(j,0);
						i.pesquisadores.splice(objindex,1);
						//console.log("- -- " + pesquisaro);
					  }
					}
				   
				  }
				  //console.log(i.pesquisadores);
				  //console.log(pesquisador);
				  //console.log(i.pesquisadores);
				}
			  
			  }
			
			return true;
		}
		else{
			return false;
		}
		
	}
	
 
}