"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastroGrupos = void 0;
const grupo_1 = require("../common/grupo");
const pesquisador_1 = require("../common/pesquisador");
class CadastroGrupos {
    constructor() {
        this.grupo = [];
    }
    start_grupo() {
        let new_grupo = new grupo_1.Grupo();
        let pesq = new pesquisador_1.Pesquisador();
        pesq.Nome = 'Joao';
        pesq.Cpf = '11111111111';
        new_grupo.nomeGrupo = "Voxar";
        new_grupo.pesquisadores.push(pesq);
        pesq = new pesquisador_1.Pesquisador();
        pesq.Nome = "Michael";
        pesq.Cpf = "22222222222";
        new_grupo.pesquisadores.push(pesq);
        this.grupo.push(new_grupo);
        new_grupo = new grupo_1.Grupo();
        pesq.Nome = 'Douglas';
        pesq.Cpf = '33333333333';
        new_grupo.nomeGrupo = "SPG";
        new_grupo.pesquisadores.push(pesq);
        pesq = new pesquisador_1.Pesquisador();
        pesq.Nome = "Michael";
        pesq.Cpf = "22222222222";
        new_grupo.pesquisadores.push(pesq);
        this.grupo.push(new_grupo);
        console.log(this.grupo);
    }
    adicionar(grupo) {
        if (1) {
            this.grupo.push(grupo);
            return true;
        }
        else
            return false;
    }
    remover(nomeGrupo) {
        return;
    }
    atualizar(pesquisador) {
        return;
    }
}
exports.CadastroGrupos = CadastroGrupos;
//# sourceMappingURL=cadastrogrupos.js.map