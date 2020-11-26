
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { FormaDeAvaliacao } from '../../../../common/formaDeAvaliacao';

@Injectable({
    providedIn: 'root'
})

export class FormasDeAvaliacaoService {

    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private url = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    adicionar(qualis: FormaDeAvaliacao, arquivo: File): Observable<any> {
        let formData = new FormData();
        formData.append('qualisFile', arquivo, arquivo.name);
        formData.append('qualisData', JSON.stringify(qualis));
        return this.http.post<any>(this.url + "/formas/adicionar", formData)
              .pipe(
                retry(2),
                map(res => {if (res.success) {return res.success;} else {return res.failure}})
        );
    }

    remover(qualis: FormaDeAvaliacao): Observable<any> {
        return;
    }

    atualizar(qualis: FormaDeAvaliacao, arquivo: File): Observable<any> {
        return;
    }

}