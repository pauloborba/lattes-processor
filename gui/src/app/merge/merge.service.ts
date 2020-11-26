import { Injectable }    from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Pesquisador } from '../../../../common/pesquisador';
import { Grupo } from '../../../../common/grupo';


@Injectable()
export class MergeService  {

	private url = 'http://localhost:3000';


	constructor(private http: HttpClient){};

	sendMergeComponents(pack:String[]) : Observable<boolean>{
		return this.http.post<any>(this.url+'/cadastrogrupos/adicionar',pack).pipe(retry(2),
				map(result => {
					if(result.success){
						return true;
					}
					else{
						return false;
					}
				})
			);
	};


	getGroups(): Observable<Grupo[]>{
		 return this.http.get<Grupo[]>(this.url+'/cadastrogrupos').pipe(retry(2));
	}

}