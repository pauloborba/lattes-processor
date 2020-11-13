export class Grupo {
	nomeGrupo: String;

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



