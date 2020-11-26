import { Component, OnInit } from '@angular/core';
import { Pesquisador } from '../../../../common/pesquisador';
import { Publicacao } from '../../../../common/publicacao';

  @Component({
   selector: 'app-import',
   templateUrl: './pesquisadores.component.html',
   styleUrls: ['./pesquisadores.component.css']
 })

 export class PesquisadoresComponent {
    buttonStatus: boolean[] = [false,false];
    pesquisadores: Pesquisador[];
    notificacaoClasses: {};
    notificacaoTexto: String;
    
    clickButtonExpande(index: number){
        this.buttonStatus[index] = !this.buttonStatus[index];       
    }

    controla_notificacao(ativa:boolean,positiva:boolean=false,texto:string = ''){
        if (!ativa) {
            this.notificacaoClasses =  {
                esconder: true,
            };
        }else {
            this.notificacaoClasses =  {
                negativa: !positiva,
                positiva: positiva,
                esconder: false,
            };
            this.notificacaoTexto = texto;
        }
    }
    
    ngOnInit(): void {
        //tests
        let pesq: Pesquisador = new Pesquisador();
        let pub: Publicacao = new Publicacao();
        let pub2: Publicacao = new Publicacao();
        pesq.Nome = 'João';
        pesq.Cpf = '09078852';
        pub.titulo = 'Minha publicação foda';
        pub2.titulo = 'Minha publicação ainda mais foda';
        pesq.Publicacoes = [pub,pub2];
        this.pesquisadores= [pesq,pesq];
        console.log(pesq.Publicacoes);
        this.controla_notificacao(true,true,"esta é uma notificação de teste");
    }
 }