import { Pesquisador } from '../common/pesquisador';
import { Publicacao } from '../common/publicacao';
 
export class Pesquisadores {
    private pesquisadores: Pesquisador[] = [];
 
    get Publicacoes():Publicacao[] {
        return [];
    }
 
    atualizar(pesquisador: Pesquisador):boolean {
        return false;
    }
 
    adiconar(pesquisadores: Pesquisador[]):boolean {
        return false;
    }
 
    remover(cpfs: String[]):boolean {
        return false;
    }
}