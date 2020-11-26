import { FormaDeAvaliacao } from '../common/formaDeAvaliacao';

export class CadastroFormas {
    formasDeAvaliacao: FormaDeAvaliacao[] = [];
    arquivos: Map<Number, File> = new Map();
    indice = 1;

    criar(formaDeAvaliacao: FormaDeAvaliacao, arquivo: File): FormaDeAvaliacao {

        var result = null;

        //console.log(formaDeAvaliacao);
        // !this.formasDeAvaliacao.find(formaDeAvaliacao => formaDeAvaliacao.descricao == formaDeAvaliacao.descricao);
        //|| this.arquivoNaoCadastrado(arquivo)

        if (this.formaNaoCadastrada(formaDeAvaliacao.descricao)) {

            result = new FormaDeAvaliacao();
            result.copyFrom(formaDeAvaliacao);
            result.id = this.indice;

            //console.log({result});

            this.arquivos.set(this.indice, arquivo);
            this.indice = this.indice + 1;
            this.formasDeAvaliacao.push(result);

        }
        

        return result;
    }

    formaNaoCadastrada(descricao: string): boolean {
        console.log("descricao", descricao);
        let bool = !this.formasDeAvaliacao.find(formaDeAvaliacao => formaDeAvaliacao.descricao == descricao);
        console.log(bool);
        return bool;
    }

    // arquivoNaoCadastrado(name: string): boolean {
    //     let nome = this.arquivos.get(key)
    //     let bool = true;
    //     //let bool = !this.arquivos.find(arquivo => arquivo.name == name);
    //     return bool;
    // }

    atualizar(formaDeAvaliacao: FormaDeAvaliacao, arquivo: File): FormaDeAvaliacao {
        let formaParaAtualizar = this.getForma(formaDeAvaliacao);

        if(formaDeAvaliacao.descricao !== formaParaAtualizar.descricao){
            if(!this.formasDeAvaliacao.some(forma => forma.descricao === formaDeAvaliacao.descricao)){
                formaParaAtualizar.descricao = formaDeAvaliacao.descricao;
            }
        } else {
            throw "Já existe Forma de Avaliação com essa descrição";
        }

        if(arquivo){
            this.arquivos.set(formaParaAtualizar.id, arquivo);
        }

        return formaParaAtualizar;
    }

    remover(formaParaRemover: FormaDeAvaliacao): FormaDeAvaliacao {

        console.log("chegou aqui no cadastroformas");
        console.log(formaParaRemover);
        var formaRemovida: FormaDeAvaliacao = new FormaDeAvaliacao();
        // this.formasDeAvaliacao.forEach((forma, index) => { //tirar dúvida aqui
        //     if (formaParaRemover.id === forma.id) {
        //         formaRemovida.copyFrom(forma);
        //         forma = null;
        //     }
        // })

        for (let index = 0; index < this.formasDeAvaliacao.length; index++) {
            if (formaParaRemover.id === this.formasDeAvaliacao[index].id) {
                formaRemovida.copyFrom(this.formasDeAvaliacao[index]);
                this.formasDeAvaliacao[index] = null;
            }

        }

        this.formasDeAvaliacao = this.formasDeAvaliacao.filter(function (el) {
            return el != null;
        });

        return formaRemovida;
    }

    getFormas(): FormaDeAvaliacao[] {
        return this.formasDeAvaliacao;
    }

    getForma(formaDeAvaliacao: FormaDeAvaliacao) {
        var result: FormaDeAvaliacao = this.formasDeAvaliacao.find(a => a.id == formaDeAvaliacao.id);
        return result;
    }

}