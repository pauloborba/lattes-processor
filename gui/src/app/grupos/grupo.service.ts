import { Injectable, Component, OnInit,EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Pesquisador } from '../../../../common/pesquisador';
import { Grupo } from '../../../../common/grupo';


@Injectable()
export class GrupoService {

	private taURL = 'http://localhost:3000';

	constructor(private http: HttpClient) {}

	private modals: any[] = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
	}
	
	adicionar(a: Grupo): Observable<boolean> {
		console.log("EM SERVICE");
		return this.http.post<any>(this.taURL + '/cadastrogrupos/adicionar', a)
			.pipe( 
				retry(2),
				map( res => {if (res.success) {return true;} else {return false;}} )
		  	); 
	};
	
	atualizar(tipoAtualizacao:string, a : Grupo): Observable<boolean>{
		console.log("ATUALIZANDO NO SERVICE");
		return this.http.post<any>(this.taURL + '/cadastrogrupos/atualizar', {tipoAtualizacao,a})
			.pipe( 
				retry(2),
				map( res => {if (res.success) {return true;} else {return false;}} )
		);
	};

	getGroups(): Observable<Grupo[]>{
		return this.http.get<Grupo[]>(this.taURL+'/cadastrogrupos').pipe(retry(2));
   }

	remover(nome: String): Observable<boolean>{
		console.log("REMOVENDO NO SERVICE");
		console.log(nome);
		return this.http.delete<any>(this.taURL + '/cadastrogrupos/remover/'+nome)
			.pipe( 
				retry(2),
				map( res => {if (res.success) {return true;} else {return false;}} )
		);
	}

}