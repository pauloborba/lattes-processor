
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormaDeAvaliacao } from '../../../../common/formaDeAvaliacao';

@Injectable()
export class FormaDeAvaliacaoService {

    constructor(private http: HttpClient) { }

    adicionar(qualis: FormaDeAvaliacao): Promise<FormaDeAvaliacao> {
        return;
    }

    remover(qualis: FormaDeAvaliacao): Promise<FormaDeAvaliacao> {
        return;
    }

    atualizar(qualis: FormaDeAvaliacao): Promise<FormaDeAvaliacao> {
        return;
    }

}