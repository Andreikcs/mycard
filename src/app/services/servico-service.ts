import {Injectable} from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http'; 
import { AbstractService } from './abstract-service';
import { Servico } from '../model/servico';
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
 /*
    public pedirSenha():Observable<any> {
        return this.http.get(this.urlWeb+"/pedirSenha");
    }

    public logar(login:string, senha:string):Observable<any> {
        let header = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        let urlSearch = new URLSearchParams();
        urlSearch.append('login', login);
        urlSearch.append('senha', senha);
        let body = urlSearch.toString();
        let requestOptions =  new RequestOptions({
            headers:header
        });
          return this.http.post(this.urlWeb + '/logar',body, requestOptions ).map(res=>{
            return res.json();
          })
    }
*/
    

}