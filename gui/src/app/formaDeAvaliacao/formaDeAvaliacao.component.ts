import { Component} from '@angular/core';

import { FormaDeAvaliacaoService } from './formaDeAvaliacao.service';
import { FormaDeAvaliacao } from '../../../../common/formaDeAvaliacao';

@Component({
    selector: 'app-import',
    templateUrl:'./qualis.component.html',
    styleUrls: ['./qualis.component.css']
})

export class FormaDeAvaliacaoServiceComponent {

    constructor(private formaDeAvaliacaoService: FormaDeAvaliacaoService) {}

    formaDeAvaliacao: FormaDeAvaliacao = new FormaDeAvaliacao();
    formasDeAvaliacao: FormaDeAvaliacao[];
    mensagemErro: string = "";

    criarQualis(formaDeAvaliacao: FormaDeAvaliacao): void {
        this.formaDeAvaliacaoService.adicionar(formaDeAvaliacao).then(f => {
               this.formasDeAvaliacao.push(f);
               this.formaDeAvaliacao = new FormaDeAvaliacao();
         })
         .catch(erro => this.mensagemErro = erro);
    }


}