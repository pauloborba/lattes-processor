"use strict";
exports.__esModule = true;
var Grupo = /** @class */ (function () {
    function Grupo() {
        this.pesquisadores = [];
        this.clean();
    }
    Grupo.prototype.clean = function () {
        this.nomeGrupo = "";
    };
    Grupo.prototype.clone = function () {
        var grupo = new Grupo();
        grupo.copyFrom(this);
        return grupo;
    };
    Grupo.prototype.copyFrom = function (from) {
        this.nomeGrupo = from.nomeGrupo;
    };
    return Grupo;
}());
exports.Grupo = Grupo;
