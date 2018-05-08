import {Injectable} from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http'; 
import { AbstractService } from './abstract-service';
import { Setor } from '../model/setor';
/*
 1 - importar a classe do model
 2-  criar a classe service
 3- 
*/

@Injectable()
export class SetorService extends AbstractService<Setor>{

    constructor (public http: Http ){
       super(http);
    }

   public getWebService(){
     return "setor";
    }
 
    public buscarPorNomeSetor(setor: string): Observable<Array<Setor>> {
        return this.http.get(this.urlWeb + "/buscarpornomesetor", setor).map(res => {
            return res.json();
        });

    }


}