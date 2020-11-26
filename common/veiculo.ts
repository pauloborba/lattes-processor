export class Veiculo{

	issn : string;
	titulo : string;

	constructor() {
        this.clean();
    }

    clean() {
		this.issn = "";
		this.titulo = "";
    }
}