import { Pessoa } from './pessoa';

/* Validando Pessoa Fisica */
export function ValidaPessoaFisica(Pessoa) {
    let confirm = false;
    if (this.pessoa.nome_razao != null
        && this.pessoa.login != null
        && this.pessoa.senha != null) {
        confirm = true;
    }
    return confirm;
}

export function ConfirmaFisica(ValidaPessoaFisica) {
    let alert = this.alertCtrl.create({
        title: 'Atenção',
        message: 'Cadastro Salvo com Sucesso',
        buttons: [
            {
                text: 'OK',
                handler: () => {
                    console.log('ok');
                }
            }
        ]
    });
    alert.present();

}



/* Validando Pessoa Juridica */
export function ValidaPessoaJuridica(Pessoa) {
    let confirm = false;
    if (this.pessoa.nome_razao != null
        && this.pessoa.login != null
        && this.pessoa.senha != null) {
        confirm = true;
    }
    return confirm;
}


export function ErroDeCadastro() {
    let alert = this.alertCtrl.create({
        title: 'Atenção',
        message: 'Complete todos os Campos Obrigatórios',
        buttons: [
            {
                text: 'OK',
                handler: () => {
                    console.log('ok');
                }
            }
        ]
    });
    alert.present();

}



