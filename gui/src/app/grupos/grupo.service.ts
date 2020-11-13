import { Injectable }    from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pesquisador } from '../../../../common/pesquisador';
import { Grupo } from '../../../../common/grupo';

@Injectable()
export class GrupoService {

	constructor(private http: HttpClient){}

	adicionar(grupo: Grupo): Grupo{
		return;
	}

	remover(grupo: Grupo): Grupo{
		return;
	}

	atualizar(pesquisador: Pesquisador): Pesquisador{
		return;
	}


}