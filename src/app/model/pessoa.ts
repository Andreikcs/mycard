import { Cidade } from './cidade';
import { AbstractEntity } from './abstractentity';

export class Pessoa extends AbstractEntity{


    public tipo: number; 
    public nome_razao: string; 
    public cpf_cnpj: string;
    public telefone_comercial: string; 
    public celular: string;
    public skype: string;
    public email: string;

    public endereco: string;
    public bairro: string;
    public numero: string;
    public cidade: Cidade;
    public latitude: string;
    public longitude: string;

    public  login:string; 
    public  senha:string;

    private caixa:number;


}
