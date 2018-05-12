import { DateTime } from "ionic-angular";
import { AbstractEntity } from './abstractentity';

export class Servico extends AbstractEntity{
     
    /* FK Empresa */
    public id_empresa: number; 
    /* FK Pessoa */
    public id_pessoa: number; 
    /* FK Servico */
    public id_servico: number; 
    

    public data: DateTime;
    public senha: string;
    public sigla: string;

}
