import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/RX';
import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';


@Injectable()
export abstract class AbstractService<T>{

  protected protocolo: string = 'http';
  protected ip: string = '192.168.201.16'; //FADEP
  //protected ip: string = '192.168.110.118';   //IXC
  protected porta: string = '8085';
  protected contextBase: string = 'mycard/rest/';
  protected url: string = this.protocolo + '://' + this.ip + ':' + this.porta + '/' + this.contextBase; 
  protected urlWeb:string = '';

  constructor(protected http: Http) {
    this.urlWeb = this.url + this.getWebService();
  }

  public abstract getWebService():string;

  public findAll(): Observable<Array<T>> {
    return this.http.get(this.urlWeb).map(res => {
      return res.json();
    });
  }

 
  public findById(id: number): Observable<T> {
    return this.http.get(this.urlWeb + "/" + id).map(res => {
      return res.json();
    });
  }

  public remove(id: number): Observable<T> {
    return this.http.delete(this.urlWeb + "/" + id).map(res => {
      return res.json();
    });
  }

  public save(obj: T): Observable<T> {
     //return this.http.post(this.urlWeb + "/salvar", obj).then(res => {
      return this.http.post(this.urlWeb + "/salvar", obj).map(res => {
      return res.json();
    });
  }


}
