"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pesquisador = void 0;
class Pesquisador {
    constructor() {
        this.nome = '';
        this.cpf = '';
        this.publicacoes = [];
    }
    get Nome() {
        return this.nome;
    }
    get Cpf() {
        return this.cpf;
    }
    get Publicacoes() {
        return this.publicacoes;
    }
    set Nome(nome) {
        this.nome = nome;
    }
    set Cpf(cpf) {
        this.cpf = cpf;
    }
    set Publicacoes(publicacoes) {
        this.publicacoes = [];
        this.adiconarPublicacoes(publicacoes);
    }
    adiconarPublicacoes(publicacoes) {
        for (let p of publicacoes) {
            this.publicacoes.push(p);
        }
        return true;
    }
    removerPublicacoes(ids) {
        for (let id of ids) {
            for (let p of this.publicacoes) {
                if (p.titulo == id) {
                    let objindex = this.publicacoes.indexOf(p, 0);
                    this.publicacoes.splice(objindex, 1);
                }
            }
        }
        return true;
    }
}
exports.Pesquisador = Pesquisador;
//# sourceMappingURL=pesquisador.js.map