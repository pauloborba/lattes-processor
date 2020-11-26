import { Pesquisador } from '../../../../common/pesquisador';
import { Injectable }    from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable()
export class PesquisadoresService {
 
    constructor(private http: HttpClient) {}
 
    adicionar(pesquisadores: Pesquisador[]): Observable<boolean> {
        return null;
    }
 
    atualizar(pesquisador: Pesquisador): Observable<boolean> {
        return null;
    }
 
    getPesquisadores(): Observable<Pesquisador[]> {
        return null;
    }

}