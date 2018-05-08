import { Pessoa } from './pessoa';

 export function ValidaPessoaFisica(Pessoa) {
    let confirm = false;
    if (this.pessoa.nome_razao != null     
        && this.pessoa.celular != null
        && this.pessoa.email != null
        && this.pessoa.login != null
        && this.pessoa.senha != null) {
        confirm = true;
        return confirm;
    }
}
