"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grupo = void 0;
class Grupo {
    constructor() {
        this.pesquisadores = [];
        this.clean();
    }
    clean() {
        this.nomeGrupo = "";
    }
    clone() {
        var grupo = new Grupo();
        grupo.copyFrom(this);
        return grupo;
    }
    copyFrom(from) {
        this.nomeGrupo = from.nomeGrupo;
    }
}
exports.Grupo = Grupo;
//# sourceMappingURL=grupo.js.map