export class Avaliacao {
    conceito: string;

    constructor() {
        this.clean();
    }

    clean() {
        this.conceito = "";
    }

    clone(): Avaliacao {
        var avaliacao: Avalicao = new Avaliacao();
        avaliacao.copyFrom(this);
        return avaliacao;
    }

    setConceito(conceito: string): void{}
}