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
 
    atualizar(pesquisador: Pesquisador):boolean {
        return false;
    }
 
    adiconar(pesquisadores: Pesquisador[]):boolean {
        for( let p of pesquisadores){
            this.pesquisadores.push(p);
        }
        return true;
    }
 
    remover(cpfs: String[]):boolean {
        return false;
    }
}