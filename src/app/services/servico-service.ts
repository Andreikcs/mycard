import {Injectable} from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http'; 
import { AbstractService } from './abstract-service';
import { Servico } from '../model/servico';
import { Setor } from '../model/setor';
/*
 1 - importar a classe do model
 2-  criar a classe service
 3- 
*/

@Injectable()
export class ServicoService extends AbstractService<Servico>{

    constructor (public http: Http ){
       super(http);
    }

   public getWebService(){
     return "servico";
    }
 
    public buscarPorNomeSetor(setor: string): Observable<Array<Setor>> {
        return this.http.post(this.urlWeb + "/buscarpornomesetor", setor).map(res => {
            return res.json();
        });

    }

}