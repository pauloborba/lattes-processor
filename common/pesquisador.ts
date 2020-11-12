import { Publicacao } from './publicacao';
 
export class Pesquisador {
    private nome: String = '';
    private cpf: String = '';
    private publicacoes: Publicacao[] = [];
 
    get Nome():String {
    }
 
    get Cpf():String {
    }
 
    get Publicacoes():Publicacao[] {
    }
 
    set Nome(nome: String):boolean {
    }
 
    set Cpf(cpf: String):boolean {
    }
 
    set Publicacoes(publicacoes: Publicacao[]):boolean {
    }
 
    adiconarPublicacoes(publicacoes: Publicacao[]):boolean {
    }
 
    removerPublicacoes(ids: String[]):boolean {
    }
 
}