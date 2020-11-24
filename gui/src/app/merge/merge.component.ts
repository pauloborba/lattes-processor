import { Grupo } from '../../../../common/grupo';
import { Component, OnInit } from '@angular/core';
import { MergeService } from './merge.service';

  
  @Component({
   selector: 'app-merge',
   templateUrl: './merge.component.html',
   styleUrls: ['./merge.component.css']
 })



export class MergeComponent {

	constructor(private mergeService: MergeService){};

 	output_checkbox:boolean[] = [];
 	output_textbox:string;
 	
	grupo: Grupo[];  //{nomeGrupo: string}[] = [{"nomeGrupo":"Grupo 1"},{"nomeGrupo":"Grupo 2"},{"nomeGrupo":"Grupo 3"},{"nomeGrupo":"Grupo 4"}];

	packMergeComponents(newgroup_name:string, groups_tomerge:boolean[]){
		let array_of_groups :String[] =[];

		array_of_groups.push(this.output_textbox);

		for(let i of this.grupo){
			let objindex = this.grupo.indexOf(i, 0);
			if (this.output_checkbox[objindex] == true) {
				array_of_groups.push(i.nomeGrupo);
			}
		}
			console.log(array_of_groups);
	}
	// atualizar grupo quando cadastrado


	ngOnInit():void{
		this.mergeService.getGroups().subscribe(
			p => {this.grupo = p;
				console.log(p);
				console.log(this.grupo);
				for(let g of this.grupo){
			this.output_checkbox.push(false);
		}}
			)

		
	}
	
}




