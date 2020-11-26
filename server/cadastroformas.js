"use strict";
exports.__esModule = true;
var formaDeAvaliacao_1 = require("../common/formaDeAvaliacao");
var CadastroFormas = /** @class */ (function () {
    function CadastroFormas() {
        this.formasDeAvaliacao = [];
        this.indice = 1;
    }
    CadastroFormas.prototype.criar = function (formaDeAvaliacao) {
        var result = null;
        result = new formaDeAvaliacao_1.FormaDeAvaliacao();
        result.copyFrom(formaDeAvaliacao);
        result.id = this.indice;
        this.indice = this.indice + 1;
        this.formasDeAvaliacao.push(result);
        return result;
    };
    CadastroFormas.prototype.atualizar = function (formaDeAvaliacao) {
        var result = this.getForma(formaDeAvaliacao);
        if (result)
            result.copyFrom(formaDeAvaliacao);
        return result;
    };
    CadastroFormas.prototype.remover = function (formaParaRemover) {
        var formaRemovida = new formaDeAvaliacao_1.FormaDeAvaliacao();
        this.formasDeAvaliacao.forEach(function (forma, index) {
            if (formaParaRemover.id === forma.id) {
                formaRemovida.copyFrom(forma);
                forma = null;
            }
        });
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
