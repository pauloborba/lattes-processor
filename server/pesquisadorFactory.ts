import { Pesquisador } from '../common/pesquisador';
import { Pesquisadores } from './pesquisadores';
import { Publicacao } from '../common/publicacao';
 
let xml2js = require('xml2js');

export class LattesFactory {
    pesquisadores: Pesquisadores;

    // injecting
    constructor(c: Pesquisadores) {
        this.pesquisadores = c;
    }
    
    getObjetoFabricado(xml: string): Pesquisador[] {
        return this.pesquisadores.Pesquisadores;
    }

    private getArticle(a: any): Publicacao {
        let titulo = a['DADOS-BASICOS-DO-ARTIGO'][0].ATTR['TITULO-DO-ARTIGO'];
        let veiculo = a['DETALHAMENTO-DO-ARTIGO'][0].ATTR['TITULO-DO-PERIODICO-OU-REVISTA'];
        let autores_str: String[] = [];
        for (let autor of a['AUTORES']) {
            autores_str.push(autor.ATTR['NOME-COMPLETO-DO-AUTOR']);
        }
        let publi = new Publicacao();
        publi.titulo=titulo;
        publi.veiculo = veiculo;
        publi.autores = autores_str;
        return publi;
    }

    FabricarPesquisadores(xml_string: string): Pesquisador {
        let resp = null;
        let parser = new xml2js.Parser({ attrkey: "ATTR" });
        parser.parseString(xml_string, (error: any, result: any) => {
          if (error === null) {
            try {
                let temp = new Pesquisador();
                temp.Nome = result['CURRICULO-VITAE']['DADOS-GERAIS'][0].ATTR['NOME-COMPLETO'];
                temp.Cpf = result['CURRICULO-VITAE'].ATTR['NUMERO-IDENTIFICADOR'];
                result['CURRICULO-VITAE']['PRODUCAO-BIBLIOGRAFICA'][0]['ARTIGOS-PUBLICADOS'][0]['ARTIGO-PUBLICADO'].forEach((a: any) => {
                    temp.adiconarPublicacoes([this.getArticle(a)]);
                });
                resp = this.pesquisadores.adiconar([temp]);
                resp = temp;
                } catch (error) {
                    console.log(error);
                    resp = null;
                }
            }
        });

        return resp;
    }
}
