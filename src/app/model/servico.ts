import { DateTime } from "ionic-angular";
import { Empresa } from './empresa';
import { Setor } from './setor';
import { AbstractEntity } from './abstractentity';



export class Servico extends AbstractEntity{

    public tipo_servico: string;
    public descricao: string;
    public atendimento: string; 
    public hora_abertura: Date;
    public hora_fecha: Date;
    public obs: string;
    public obs2: string;
  
    /* FK Empresa */
    public empresa: Empresa;
    public setor: Setor;

   
}
