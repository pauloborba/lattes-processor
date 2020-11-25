import { Pesquisador } from '../common/pesquisador';
import { Publicacao } from '../common/publicacao';
 
export class Pesquisadores {
    private pesquisadores: Pesquisador[] = [];
 
    get Publicacoes():Publicacao[] {
        return [];
    }

    get Pesquisadores():Pesquisador[] {
        return this.pesquisadores;
    }
 
    atualizar(p: Pesquisador):boolean {
        let temp: Pesquisador[] = []
        for (let i of this.pesquisadores){
            if(i.Cpf == p.Cpf){
                let index = this.pesquisadores.indexOf(i, 0);
                this.pesquisadores[index].Nome = p.Nome;
                this.pesquisadores[index].Publicacoes = p.Publicacoes;
                console.log(this.pesquisadores)
                return true;
            }
        }
        return false;
    }
 
    adicionar(pesquisadores: Pesquisador[]):boolean {
        for( let p of [].concat(pesquisadores)){
            if (this.existe(p)){
                console.log(p)
                return false
            } else {
                this.pesquisadores.push(p);
            }
        }
        return true;
    }

    private existe(p: Pesquisador): boolean{
        for (let i of this.pesquisadores){
            if(i.Cpf == p.Cpf){
                return true;
            }
        }
        return false;
    }
 
    remover(cpfs: String[]):boolean {
        return false;
    }
}