"use strict";
exports.__esModule = true;
var veiculo_1 = require("./veiculo");
var Avaliacao = /** @class */ (function () {
    function Avaliacao() {
        this.clean();
    }
    Avaliacao.prototype.clean = function () {
        this.conceito = "";
        this.veiculo = new veiculo_1.Veiculo();
    };
    Avaliacao.prototype.clone = function () {
        var avaliacao = new Avaliacao();
        avaliacao.copyFrom(this);
        return avaliacao;
    };
    Avaliacao.prototype.copyFrom = function (from) {
        this.conceito = from.conceito;
        this.veiculo = from.veiculo;
    };
    return Avaliacao;
}());
exports.Avaliacao = Avaliacao;
