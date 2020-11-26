
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

    getFormas(): Observable<any> {
        return this.http.get<any>(this.url + "/formas")
              .pipe(
                map(res => {if (res.success) { return JSON.parse(res.success) } else {return JSON.parse(res.failure)}})
        );
    }

    adicionar(qualis: FormaDeAvaliacao, arquivo: File): Observable<any> {
        let formData = new FormData();
        formData.append('qualisFile', arquivo, arquivo.name);
        formData.append('qualisData', JSON.stringify(qualis));
        return this.http.post<any>(this.url + "/formas/criar", formData)
              .pipe(
                map(res => {if (res.success) { return JSON.parse(res.success) } else {return JSON.parse(res.failure)}})
        );
    }

    remover(qualis: FormaDeAvaliacao): Observable<any> {
        console.log("chegou aqui no service da gui: ", qualis);
        let options = {
            headers: this.headers,
            body: JSON.stringify(qualis)
        }
        return this.http.delete<any>(this.url + "/formas/remover", options)
              .pipe(
                map(res => {if (res.success) { return JSON.parse(res.success) } else {return JSON.parse(res.failure)}})
        );
    }

    atualizar(qualis: FormaDeAvaliacao, arquivo: File): Observable<any> {
        let formData = new FormData();
        if(arquivo) formData.append('qualisFile', arquivo, arquivo.name); 
        formData.append('qualisData', JSON.stringify(qualis));
        return this.http.put<any>(this.url + "/formas/atualizar", formData)
              .pipe(
                map(res => {if (res.success) { return JSON.parse(res.success) } else {return JSON.parse(res.failure)}})
        );
    }

}