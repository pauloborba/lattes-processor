export class Qualis {

    nome: string;
    arquivo: File;

    constructor() {
        this.clean();
    }

    clean() {
        this.nome = "";
        this.arquivo = null;
    }

    clone(): Qualis {
        var qualis: Qualis = new Qualis();
        qualis.copyFrom(this);
        return qualis;
    }

    copyFrom(from: Qualis): void {
        this.nome = from.nome;
        this.arquivo = from.arquivo;
    }

}