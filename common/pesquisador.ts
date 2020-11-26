import { Publicacao } from './publicacao';
 
export class Pesquisador {
    private nome: String = '';
    private cpf: String = '';
    private publicacoes: Publicacao[] = []

    get Nome():String {
        return this.nome;
    }
 
    get Cpf():String {
        return this.cpf;
    }
 
    get Publicacoes():Publicacao[] {
        return this.publicacoes;
    }
 
    set Nome(nome: String) {
        this.nome = nome;
    }
 
    set Cpf(cpf: String) {
        this.cpf = cpf;
    }
 
    set Publicacoes(publicacoes: Publicacao[]) {
        this.publicacoes = [];
        this.adiconarPublicacoes(publicacoes);
    }
 
    adiconarPublicacoes(publicacoes: Publicacao[]):boolean {
        for (let p of publicacoes) {
            this.publicacoes.push(p);
        }
        return true;
    }
 
    removerPublicacoes(ids: String[]):boolean {
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