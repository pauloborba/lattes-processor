import { Pesquisador } from './pesquisador';
 
export class Grupo {
	 nomeGrupo: string;
	 pesquisadores : Pesquisador[] = [];


	constructor() {
		this.clean();
	}
	
	clean(): void {
		this.nomeGrupo = "";
	}
 
	 clone(): Grupo {
		var grupo: Grupo = new Grupo();
		grupo.copyFrom(this);
		return grupo;
	}
 
	copyFrom(from: Grupo): void {
		this.nomeGrupo = from.nomeGrupo;
	}
 
}
 