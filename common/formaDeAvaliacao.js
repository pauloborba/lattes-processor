"use strict";
exports.__esModule = true;
var FormaDeAvaliacao = /** @class */ (function () {
    function FormaDeAvaliacao(descricao) {
        this.clean();
        this.descricao = descricao || "";
    }
    FormaDeAvaliacao.prototype.clean = function () {
        this.avaliacoes = [];
    };
    FormaDeAvaliacao.prototype.clone = function () {
        var formaDeAvaliacao = new FormaDeAvaliacao();
        formaDeAvaliacao.copyFrom(this);
        return formaDeAvaliacao;
    };
    FormaDeAvaliacao.prototype.copyFrom = function (from) {
        this.descricao = from.descricao;
        this.avaliacoes = from.avaliacoes;
    };
    return FormaDeAvaliacao;
}());
exports.FormaDeAvaliacao = FormaDeAvaliacao;
