import { Avaliacao } from './avaliacao';

export class FormaDeAvaliacao {

    descricao: string;
    avaliacao: Avaliacao[];

    constructor() {
        this.clean();
    }

    clean() {
        this.descricao = "";
        this.avaliacao = [];
    }

    clone(): FormaDeAvaliacao {
        var formaDeAvaliacao: FormaDeAvaliacao = new FormaDeAvaliacao();
        formaDeAvaliacao.copyFrom(this);
        return formaDeAvaliacao;
    }

    copyFrom(from: FormaDeAvaliacao): void {
        this.descricao = from.descricao;
        this.avaliacao = from.avaliacao;
    }

}