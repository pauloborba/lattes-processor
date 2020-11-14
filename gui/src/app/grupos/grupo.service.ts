import { Injectable }    from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pesquisador } from '../../../../common/pesquisador';
import { Grupo } from '../../../../common/grupo';

@Injectable()
export class GrupoService {

	constructor(private http: HttpClient){}

	adicionar(nomeGrupo: String): boolean{
		return;
	}

	remover(nomeGrupo: String): boolean{
		return;
	}

	atualizar(pesquisador: Pesquisador): Pesquisador{
		return;
	}


}