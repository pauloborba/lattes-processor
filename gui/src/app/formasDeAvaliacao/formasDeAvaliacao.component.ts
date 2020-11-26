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
    carregando: boolean = false;
    adicionandoForma: boolean = false;
    atualizandoForma: boolean = false;

    ngOnInit(): void {
        this.formasDeAvaliacaoService.getFormas().subscribe(
            response => {
                this.formasDeAvaliacao = response;
            }
        )
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
            this.atualizarQualis();
        }
    }

    remover(forma: FormaDeAvaliacao): void{
        console.log("chegou aqui no component da gui: ", forma);
        this.carregando = true;
        this.formasDeAvaliacaoService.remover(forma).subscribe(
            response => {
                console.log("chegou aqui na resposta da promise feita ao services");
                alert(JSON.stringify(response));
                this.formasDeAvaliacaoService.getFormas().subscribe(
                    response => {
                        //console.log(response);
                        this.formasDeAvaliacao = response;
                        this.carregando = true;
                    }
                )
            }, error => {
                alert("imprimindo o erro: " + error);
            }
        );
    }

    criarQualis(): void {
        this.formasDeAvaliacaoService.adicionar(this.formaDeAvaliacao, this.arquivo).subscribe(
            response => {

                //console.log(response);
                if (response == null) {
                    alert("Forma de Avaliação já existente");
                } else {
                    this.formasDeAvaliacao.push(response);
                this.adicionandoForma = false;
                this.formaDeAvaliacao = new FormaDeAvaliacao();
                }
            },
            error => {
                this.mensagemErro = error;
            }
        )
    }

    atualizarQualis(): void {
        this.formasDeAvaliacaoService.atualizar(this.formaDeAvaliacao, this.arquivo).subscribe(
            response => {

                //console.log(response);
                if (response == null) {
                    alert("Forma de Avaliação já existente");
                } else {
                    this.formasDeAvaliacao.push(response);
                this.adicionandoForma = false;
                this.formaDeAvaliacao = new FormaDeAvaliacao();
                }
            },
            error => {
                this.mensagemErro = error;
            }
        )
    }

}