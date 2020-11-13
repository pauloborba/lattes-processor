import { Veiculo } from './veiculo';

export class Avaliacao {
    conceito: string;
    veiculo: Veiculo;

    constructor() {
        this.clean();
    }

    clean() {
        this.conceito = "";
        this.veiculo = new Veiculo();
    }

    clone(): Avaliacao {
        var avaliacao: Avaliacao = new Avaliacao();
        avaliacao.copyFrom(this);
        return avaliacao;
    }

    copyFrom(from: Avaliacao): void {
        this.conceito = from.conceito;
        this.veiculo = from.veiculo;
      }

}