import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service';
import { Events } from 'ionic-angular';
import { Cidade } from '../model/cidade';


@Injectable()
export class CidadeService extends AbstractService<Cidade> {

    constructor(public http: Http) {
        super(http);
    }
    getWebService() {
        return "cidade";
    }

   public buscarPorNome(nome:string):Observable<Array<Cidade>>{
        return this.http.post(this.urlWeb+"/buscarpornome",nome).map(res=>{
        return res.json();
       });

   }




}
