import { FormaDeAvaliacao } from '../common/formaDeAvaliacao';

export class CadastroFormas {
  formasDeAvaliacao: FormaDeAvaliacao[] = [];
  indice=1;

  criar(formaDeAvaliacao: FormaDeAvaliacao): FormaDeAvaliacao {
    var result = null;
    result = new FormaDeAvaliacao();
    result.copyFrom(formaDeAvaliacao);
    result.id = this.indice;
    this.indice = this.indice+1;
    this.formasDeAvaliacao.push(result);
    return result;
  }

  atualizar(formaDeAvaliacao: FormaDeAvaliacao): FormaDeAvaliacao {
    var result: FormaDeAvaliacao = this.getForma(formaDeAvaliacao)
    if (result) result.copyFrom(formaDeAvaliacao);
    return result;
  }

  remover(formaParaRemover: FormaDeAvaliacao): FormaDeAvaliacao{
    var formaRemovida: FormaDeAvaliacao = new FormaDeAvaliacao();
    this.formasDeAvaliacao.forEach((forma, index) => {
      if(formaParaRemover.id === forma.id){
        formaRemovida.copyFrom(forma);
        forma = null;
      }
    })

    this.formasDeAvaliacao = this.formasDeAvaliacao.filter(function (el) {
      return el != null;
    });
    
    return formaRemovida;
  }

  getFormas(): FormaDeAvaliacao[] {
    return this.formasDeAvaliacao;
  }

  getForma(formaDeAvaliacao: FormaDeAvaliacao){
  	var result: FormaDeAvaliacao = this.formasDeAvaliacao.find(a => a.id == formaDeAvaliacao.id);
    return result;
  }

}