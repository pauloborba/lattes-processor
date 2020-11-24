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
 
    adicionar(files: FileList): Observable<boolean> {
        let formData = new FormData();
        for(let i = 0; i < files.length; i++) {
            formData.append('lattesFiles', files[i]);
        }
    
        return this.http.post<any>(this.URL + '/pesquisador/adicionar', formData).pipe(
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

}