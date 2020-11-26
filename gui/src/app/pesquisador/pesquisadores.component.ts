import { Component, OnInit } from '@angular/core';
import { Pesquisador } from '../../../../common/pesquisador';
import { Publicacao } from '../../../../common/publicacao';
import { PesquisadoresService } from './pesquisadores.service';

  @Component({
   selector: 'app-import',
   templateUrl: './pesquisadores.component.html',
   styleUrls: ['./pesquisadores.component.css']
 })

 export class PesquisadoresComponent {
    buttonStatus: boolean[] = [false,false];
    pesquisadores: Pesquisador[] = [];
    notificacaoClasses: {};
    notificacaoTexto: String;
    atualizarModal: boolean = false;
    lastfiles: FileList;
    constructor(private pesquisadorService: PesquisadoresService) { }

    
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
    adicionarPesquisador(files: FileList): void{
        this.lastfiles = files;
        this.pesquisadorService.adicionar(files).subscribe(
            (status) => {
                if (status === "Pesquisador adicionado com sucesso") {
                    this.pesquisadorService.getPesquisadores().subscribe(
                        ps => { this.pesquisadores = ps; 
                                this.controla_notificacao(true,true,"Pesquisador adicionado com sucesso")
                        },
                    );
                } else if(status === 'O pesquisador já existe na base de dados') {
                    this.atualizarModal = true;
                    this.controla_notificacao(true,false,"O pesquisador já existe na base de dados")
                } else {
                    this.controla_notificacao(true,false,"Erro ao adicionar o pesquisador")
                }
            },
        );
    }

    atualizarPesquisador(files: FileList): void{
        this.pesquisadorService.atualizar(files).subscribe(
            (status) => {
                console.log(status)
                if (status === true) {
                    this.pesquisadorService.getPesquisadores().subscribe(
                        ps => { this.pesquisadores = ps; 
                                this.controla_notificacao(true,true,"Pesquisador atualizado com sucesso")
                        },
                    );
                } else {
                    this.controla_notificacao(true,false,"Erro ao atualizar o pesquisador")
                }
            },
        );
    }

    removerPesquisador(cpf:String): void{
        this.pesquisadorService.remover(cpf).subscribe(
            (status) => {
                console.log(status)
                if (status === true) {
                    this.pesquisadorService.getPesquisadores().subscribe(
                        ps => { this.pesquisadores = ps; 
                                this.controla_notificacao(true,true,"Pesquisador apagado com sucesso")
                        },
                    );
                } else {
                    this.controla_notificacao(true,false,"Erro ao apagar o pesquisador")
                }
            },
        );
    }
    
    ngOnInit(): void {
        this.controla_notificacao(true,true,"Esta é uma notificação de teste");
        this.pesquisadorService.getPesquisadores().subscribe(
            p => { this.pesquisadores = p; console.log(p);console.log(this.pesquisadores) },
        );
    }
 }