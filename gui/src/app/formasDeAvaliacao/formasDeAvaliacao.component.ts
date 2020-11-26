import { Component, OnInit } from '@angular/core';

import { FormasDeAvaliacaoService } from './formasDeAvaliacao.service';
import { FormaDeAvaliacao } from '../../../../common/formaDeAvaliacao';

@Component({
    selector: 'app-import',
    templateUrl: './formasDeAvaliacao.component.html',
    styleUrls: ['./formasDeAvaliacao.component.css']
})

export class FormasDeAvaliacaoComponent implements OnInit {

    constructor(private formasDeAvaliacaoService: FormasDeAvaliacaoService) { }

    formaDeAvaliacao: FormaDeAvaliacao = new FormaDeAvaliacao();
    formasDeAvaliacao: FormaDeAvaliacao[] = [];
    private arquivo : File = null;

    mensagemErro: string = "";
    adicionandoForma: boolean = false;
    atualizandoForma: boolean = false;

    ngOnInit(): void {
        const formaDeAvaliacaoMock: FormaDeAvaliacao = new FormaDeAvaliacao("teste");
        this.formasDeAvaliacao.push(formaDeAvaliacaoMock);
    }

    setarArquivo(arquivos: FileList): void { 
        this.arquivo = arquivos[0];
      }

    comecarAdicionarQualis(): void{
        this.formaDeAvaliacao = new FormaDeAvaliacao();
        this.adicionandoForma = true;
    }

    comecarAtualizarQualis(formaDeAvaliacao: FormaDeAvaliacao): void{
        this.formaDeAvaliacao.copyFrom(formaDeAvaliacao);
        this.atualizandoForma = true;
    }

    cancelar(){
        this.atualizandoForma = false;
        this.adicionandoForma = false;
        this.formaDeAvaliacao = new FormaDeAvaliacao();
    }

    salvar(){
        if(this.adicionandoForma){
            this.criarQualis();
        }
        if(this.atualizandoForma){
            //this.atualizandoForma();
        }
    }

    criarQualis(): void {
        this.formasDeAvaliacaoService.adicionar(this.formaDeAvaliacao, this.arquivo).subscribe(
            response => {
                this.formasDeAvaliacao.push(response);
                this.formaDeAvaliacao = new FormaDeAvaliacao();
            },
            error => {
                this.mensagemErro = error;
            }
        )
    }

}