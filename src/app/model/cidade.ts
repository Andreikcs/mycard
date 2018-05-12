import { AbstractEntity } from './abstractentity';

export class Cidade extends AbstractEntity{
  
    public nome:string;
    public cep:number;
    /*Fk Pais*/
    public id_pais:number;
 


}
