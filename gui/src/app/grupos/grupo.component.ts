import { Component, OnInit } from '@angular/core';
import { Pesquisador } from '../../../../common/pesquisador';
import { Grupo } from '../../../../common/grupo';
import { GrupoService } from './grupo.service';

  @Component({
   selector: 'app-root',
   templateUrl: './grupo.component.html',
   styleUrls: ['./grupo.component.css']
 })

 export class GrupoComponent {

	constructor(private grupoService: GrupoService){}

	grupo: Grupo = new Grupo();
    grupos: Grupo[] = [];

	criarGrupo(grupo: Grupo) : Grupo{	
		return;
	}

	removerGrupo(grupo: Grupo): Grupo{
		return;
	}

	atualizarGrupo(pesquisador:Pesquisador):Pesquisador{
		return;
	}


 }