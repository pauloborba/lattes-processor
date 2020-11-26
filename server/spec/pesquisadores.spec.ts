import { Pesquisador } from '../../common/pesquisador';
import { Publicacao } from '../../common/publicacao';
import { Veiculo } from '../../common/veiculo';
import { Pesquisadores } from '../pesquisadores'

describe("O Pesquisadores", () => {
  let pesquisadores: Pesquisadores;


  beforeAll(() => { 
        pesquisadores = new Pesquisadores();
    });

  it("inicialmente retorna uma lista de pesquisadores vazia", () => {
    expect([]).toEqual(pesquisadores.Pesquisadores)
  })
  
  it("adiciona pesquisador corretamente", () => {
      let pesquisador: Pesquisador = new Pesquisador();
      let publicacao: Publicacao = new Publicacao();
      let veiculo: Veiculo = new Veiculo();
      pesquisador.Nome = 'Paulo Henrique Monteiro Borba';
      pesquisador.Cpf = '9395715443254344';
      veiculo.Titulo = 'The Journal of Systems and Software';
      veiculo.Issn = '01641212';
      publicacao.titulo = 'From VDM Specifications To Functional Prototypes';
      publicacao.veiculo = veiculo
      publicacao.autores = ["Paulo Henrique Monteiro Borba","S. R. L. MEIRA"];
      pesquisador.Publicacoes = [publicacao];
      
      pesquisadores.adicionar([pesquisador])
      expect(pesquisadores.Pesquisadores).toContain(pesquisador)
  })

  it("adiciona pesquisador corretamente", () => {
    let pesquisador: Pesquisador = new Pesquisador();
    let publicacao: Publicacao = new Publicacao();
    let veiculo: Veiculo = new Veiculo();
    pesquisador.Nome = 'Paulo Henrique Monteiro Borba';
    pesquisador.Cpf = '9395715443254344';
    veiculo.Titulo = 'The Journal of Systems and Software';
    veiculo.Issn = '01641212';
    publicacao.titulo = 'From VDM Specifications To Functional Prototypes';
    publicacao.veiculo = veiculo
    publicacao.autores = ["Paulo Henrique Monteiro Borba","S. R. L. MEIRA"];
    pesquisador.Publicacoes = [publicacao];
    pesquisadores.atualizar(pesquisador)
    expect(pesquisadores.Pesquisadores).toContain(pesquisador)
  })

  it("remove pesquisador corretamente", () => {
    let pesquisador: Pesquisador = new Pesquisador();
    let publicacao: Publicacao = new Publicacao();
    let veiculo: Veiculo = new Veiculo();
    pesquisador.Nome = 'Paulo Henrique Monteiro Borba';
    pesquisador.Cpf = '9395715443254344';
    veiculo.Titulo = 'The Journal of Systems and Software';
    veiculo.Issn = '01641212';
    publicacao.titulo = 'From VDM Specifications To Functional Prototypes';
    publicacao.veiculo = veiculo
    publicacao.autores = ["Paulo Henrique Monteiro Borba","S. R. L. MEIRA"];
    pesquisador.Publicacoes = [publicacao];
    pesquisadores.remover([pesquisador.Cpf])
    expect(pesquisadores.Pesquisadores).not.toContain(pesquisador)
  })

})
