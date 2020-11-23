import { Publicacao } from './publicacao';
 
export class Pesquisador {
    private nome: String = '';
    private cpf: String = '';
    private publicacoes: Publicacao[] = [];
 
    get Nome():String {
        return '';
    }
 
    get Cpf():String {
        return '';
    }
 
    get Publicacoes():Publicacao[] {
        return null;
    }
 
    set Nome(nome: String) {
    }
 
    set Cpf(cpf: String) {
    }
 
    set Publicacoes(publicacoes: Publicacao[]) {
    }
 
    adiconarPublicacoes(publicacoes: Publicacao[]):boolean {
        return false;
    }
 
    removerPublicacoes(ids: String[]):boolean {
        return false;
    }
 
}