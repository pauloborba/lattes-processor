import { Pesquisador } from '../../../../common/pesquisador';
import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
 
@Injectable()
export class PesquisadoresService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private URL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }
 
    adicionar(files: FileList): Observable<String> {
        let formData = new FormData();
        for(let i = 0; i < files.length; i++) {
            formData.append('lattesFiles', files[i]);
        }
    
        return this.http.post<any>(this.URL + '/pesquisador/adicionar', formData).pipe(
            retry(2),
            map(res => {
                if (res.success) {
                    return res.success;
                } else {
                    return res.failure;
                }
            })
        );
    }
 
    atualizar(files: FileList): Observable<boolean> {
        let formData = new FormData();
        for(let i = 0; i < files.length; i++) {
            formData.append('lattesFiles', files[i]);
        }
    
        return this.http.post<any>(this.URL + '/pesquisador/atualizar', formData).pipe(
            retry(2),
            map(res => {
                if (res.success) {
                    return true;
                } else {
                    return false;
                }
            })
        );
    }
 
    getPesquisadores(): Observable<Pesquisador[]> {
        return this.http.get<any>(this.URL + '/pesquisador').pipe(
            retry(2)
        );
    }

    remover(cpf : String): Observable<boolean>{
        return this.http.post<any>(this.URL + '/pesquisador/apagar',{"cpf":cpf}, {headers: this.headers}).pipe(
            retry(2),
            map(res => {
                if (res) {
                    return true;
                } else {
                    return false;
                }
            })
        );
    }

}