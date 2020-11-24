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
        pesq.Nome = 'João';
        pesq.Cpf = '09078852';
        new_grupo.nomeGrupo = "Grupojohn";
        new_grupo.pesquisadores.push(pesq);
        pesq = new pesquisador_1.Pesquisador();
        pesq.Nome = "Michael";
        pesq.Cpf = "450222@#2110";
        new_grupo.pesquisadores.push(pesq);
        this.grupo.push(new_grupo);
        new_grupo = new grupo_1.Grupo();
        pesq.Nome = 'Douglas';
        pesq.Cpf = '1234douglas';
        new_grupo.nomeGrupo = "grupoMichaelsupremo";
        new_grupo.pesquisadores.push(pesq);
        pesq = new pesquisador_1.Pesquisador();
        pesq.Nome = "Michael";
        pesq.Cpf = "450222@#2110";
        new_grupo.pesquisadores.push(pesq);
        this.grupo.push(new_grupo);
        console.log(this.grupo);
    }
    adicionar(grupo) {
        return;
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