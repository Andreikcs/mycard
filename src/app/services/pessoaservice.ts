import {Injectable} from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http'; 
import { AbstractService } from './abstract-service';
import { Pessoa } from '../model/pessoa';

@Injectable()
export class PessoaService extends AbstractService<Pessoa>{



    constructor (public http: Http ){
       super(http);
    }

   public getWebService(){
     return "pessoa";
    }

   

    public pedirSenha():Observable<any> {
        return this.http.get(this.urlWeb+"/pedirSenha");
    }

    public logar(email:string, senha:string):Observable<any> {
        let header = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        let urlSearch = new URLSearchParams();
        urlSearch.append('email', email);
        urlSearch.append('senha', senha);
        let body = urlSearch.toString();
        let requestOptions =  new RequestOptions({
            headers:header
        });
          return this.http.post(this.urlWeb + '/logar',body, requestOptions ).map(res=>{
            return res.json();
          })
    } 
    
    public buscarPorTipo(tipo: number): Observable<Array<Pessoa>> {
        return this.http.get(this.urlWeb + "/buscarPorTipo/"+tipo).map(res => {
            return res.json();
        });

    }
    

}