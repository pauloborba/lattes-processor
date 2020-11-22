import { Pesquisador } from '../common/pesquisador';
 
@Injectable()
export class PesquisadoresService {
 
    constructor(private http: HttpClient) {}
 
    adicionar(pesquisadores: Pesquisador[]): Observable<boolean> {
    }
 
    atualizar(pesquisador: Pesquisador): Observable<boolean> {
    }
 
    getPesquisadores(): Observable<Pesquisador[]> {
    }
 