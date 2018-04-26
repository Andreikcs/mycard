import { Component } from '@angular/core';
import { NavController, Alert, NavParams } from 'ionic-angular';
import { ItemMenuPage } from '../itemMenu/itemMenu';
import { PessoaPage } from '../pessoa/pessoa';
import { PessoaService } from './../../services/pessoaservice';
import { AlertController } from 'ionic-angular';
import { Pessoa } from './../../model/pessoa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PessoaService]
})


export class HomePage {
  public pessoa: Pessoa = new Pessoa();
  public funcaoPosLogin: Function;


  constructor(public navCtrl: NavController,
    private pessoaservice: PessoaService,
    private alertCtrl: AlertController,
    public navParams: NavParams
  ) {
    this.funcaoPosLogin = this.navParams.get('funcaoPosLogin');
  }

  public verificaTipo(){
    let pObject = localStorage.getItem("pessoa");
    let pessoa:Pessoa = JSON.parse(pObject);
    // if (pessoa.tipo == 1) {
    //   this.carregaPessoaFisica();
    // } else {
    //   this.carregaPessoaJuridica();
    // }
  }    


  public goToLogar() {
    this.pessoaservice.logar(this.pessoa.login, this.pessoa.senha).subscribe((pessoa) => {
      if (pessoa != null) {
        localStorage.setItem("pessoa", JSON.stringify(pessoa));
        //this.funcaoPosLogin(pessoa.tipo);
        this.goToMenu();
      }
    }, error => {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        message: 'Login ou Senha Inválidos!',
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
    });
  }

  public goToMenu() {
    this.navCtrl.setRoot(ItemMenuPage);
  }
  public goToPessoa() {
    this.navCtrl.push(PessoaPage);
  }


}