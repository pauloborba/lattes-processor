
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Qualis } from '../../../../common/qualis';

@Injectable()
export class QualisService {

    constructor(private http: HttpClient) { }

    adicionar(qualis: Qualis): Promise<Qualis> {
        return;
    }

    remover(qualis: Qualis): Promise<Qualis> {
        return;
    }

    atualizar(qualis: Qualis): Promise<Qualis> {
        return;
    }

}