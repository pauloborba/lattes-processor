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
		
		for(let i of this.grupo){
			let nameIndex = this.grupo.indexOf(i,0);

			if(this.grupo[nameIndex].nomeGrupo === array_of_groups[0]){
				console.log("Ja existe um grupo cadastrado com o nome escolhido (validacao no client)");
				return;
			}
		}
		

		this.mergeService.sendMergeComponents(array_of_groups).subscribe(
			result => {
				if(result == true){
					this.mergeService.getGroups().subscribe(
						a => {
							this.grupo = a;
							console.log(this.grupo);

							console.log("grupo adicionado com sucesso");
						});
				} 
				else{
					console.log("falha ao adicionar grupo");
				}
			}
		);
	}
	// atualizar grupo quando cadastrado


	ngOnInit():void{
		this.mergeService.getGroups().subscribe(
			a => {this.grupo = a;
				console.log(this.grupo);
				for(let g of this.grupo){
			this.output_checkbox.push(false);
		}}
			)

		
	}
	
}




