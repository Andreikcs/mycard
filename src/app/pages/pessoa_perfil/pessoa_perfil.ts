import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-home',
  templateUrl: 'pessoa_perfil.html'
})

export class PessoaPerfilPage {

  constructor(public navCtrl: NavController) {

  }

  public goToLogin() {
    this.navCtrl.push(HomePage);

  }

}
