"use strict";
exports.__esModule = true;
var formaDeAvaliacao_1 = require("../common/formaDeAvaliacao");
var CadastroFormas = /** @class */ (function () {
    function CadastroFormas() {
        this.formasDeAvaliacao = [];
        this.arquivos = new Map();
        this.indice = 1;
    }
    CadastroFormas.prototype.criar = function (formaDeAvaliacao, arquivo) {
        var result = null;
        //console.log(formaDeAvaliacao);
        // !this.formasDeAvaliacao.find(formaDeAvaliacao => formaDeAvaliacao.descricao == formaDeAvaliacao.descricao);
        //|| this.arquivoNaoCadastrado(arquivo)
        if (this.formaNaoCadastrada(formaDeAvaliacao.descricao)) {
            result = new formaDeAvaliacao_1.FormaDeAvaliacao();
            result.copyFrom(formaDeAvaliacao);
            result.id = this.indice;
            //console.log({result});
            this.arquivos.set(this.indice, arquivo);
            this.indice = this.indice + 1;
            this.formasDeAvaliacao.push(result);
        }
        return result;
    };
    CadastroFormas.prototype.formaNaoCadastrada = function (descricao) {
        console.log("descricao", descricao);
        var bool = !this.formasDeAvaliacao.find(function (formaDeAvaliacao) { return formaDeAvaliacao.descricao == descricao; });
        console.log(bool);
        return bool;
    };
    // arquivoNaoCadastrado(name: string): boolean {
    //     let nome = this.arquivos.get(key)
    //     let bool = true;
    //     //let bool = !this.arquivos.find(arquivo => arquivo.name == name);
    //     return bool;
    // }
    CadastroFormas.prototype.atualizar = function (formaDeAvaliacao, arquivo) {
        var formaParaAtualizar = this.getForma(formaDeAvaliacao);
        if (formaDeAvaliacao.descricao !== formaParaAtualizar.descricao) {
            if (!this.formasDeAvaliacao.some(function (forma) { return forma.descricao === formaDeAvaliacao.descricao; })) {
                formaParaAtualizar.descricao = formaDeAvaliacao.descricao;
            }
        }
        else {
            throw "Já existe Forma de Avaliação com essa descrição";
        }
        if (arquivo) {
            this.arquivos.set(formaParaAtualizar.id, arquivo);
        }
        return formaParaAtualizar;
    };
    CadastroFormas.prototype.remover = function (formaParaRemover) {
        console.log("chegou aqui no cadastroformas");
        console.log(formaParaRemover);
        var formaRemovida = new formaDeAvaliacao_1.FormaDeAvaliacao();
        // this.formasDeAvaliacao.forEach((forma, index) => { //tirar dúvida aqui
        //     if (formaParaRemover.id === forma.id) {
        //         formaRemovida.copyFrom(forma);
        //         forma = null;
        //     }
        // })
        for (var index = 0; index < this.formasDeAvaliacao.length; index++) {
            if (formaParaRemover.id === this.formasDeAvaliacao[index].id) {
                formaRemovida.copyFrom(this.formasDeAvaliacao[index]);
                this.formasDeAvaliacao[index] = null;
            }
        }
        this.formasDeAvaliacao = this.formasDeAvaliacao.filter(function (el) {
            return el != null;
        });
        return formaRemovida;
    };
    CadastroFormas.prototype.getFormas = function () {
        return this.formasDeAvaliacao;
    };
    CadastroFormas.prototype.getForma = function (formaDeAvaliacao) {
        var result = this.formasDeAvaliacao.find(function (a) { return a.id == formaDeAvaliacao.id; });
        return result;
    };
    return CadastroFormas;
}());
exports.CadastroFormas = CadastroFormas;
