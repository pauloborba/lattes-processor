import { Component} from '@angular/core';

import { QualisService } from './qualis.service';
import { Qualis } from '../../../../common/qualis';

@Component({
    selector: 'app-import',
    templateUrl:'./qualis.component.html',
    styleUrls: ['./qualis.component.css']
})

export class QualisComponent {

    constructor(private qualisService: QualisService) {}

    qualis: Qualis = new Qualis();
    qualisLista: Qualis[];
    mensagemErro: string = "";

    criarQualis(qualis: Qualis): void {
        this.qualisService.adicionar(qualis).then(q => {
               this.qualisLista.push(q);
               this.qualis = new Qualis();
         })
         .catch(erro => this.mensagemErro = erro);
    }


}