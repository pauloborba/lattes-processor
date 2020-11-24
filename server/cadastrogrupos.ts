import { Grupo } from  '../common/grupo';
import { Pesquisador } from '../common/pesquisador';

export class CadastroGrupos {
	grupo: Grupo[] = [];


	start_grupo(){
		let new_grupo = new Grupo();
		let pesq: Pesquisador = new Pesquisador();
        pesq.Nome = 'João';
        pesq.Cpf = '09078852';
       	new_grupo.nomeGrupo = "Grupojohn"
       	new_grupo.pesquisadores.push(pesq);
       	pesq = new Pesquisador();
       	pesq.Nome = "Michael";
       	pesq.Cpf = "450222@#2110";
       	new_grupo.pesquisadores.push(pesq);
       	this.grupo.push(new_grupo);
       	new_grupo = new Grupo();
       	pesq.Nome = 'Douglas';
        pesq.Cpf = '1234douglas';
       	new_grupo.nomeGrupo = "grupoMichaelsupremo"
       	new_grupo.pesquisadores.push(pesq);
       	pesq = new Pesquisador();
       	pesq.Nome = "Michael";
       	pesq.Cpf = "450222@#2110";
       	new_grupo.pesquisadores.push(pesq);
       	this.grupo.push(new_grupo);
       	console.log(this.grupo);
	}

	adicionar(grupo: Grupo): boolean {
		return;
	}

	remover(nomeGrupo: String): boolean {
		return;
	}

	atualizar(pesquisador: Pesquisador): Pesquisador{
		return;
	}

}
