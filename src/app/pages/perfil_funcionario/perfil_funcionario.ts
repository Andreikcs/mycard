import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-home',
  templateUrl: 'perfil_funcionario.html'
})

export class PerfilFuncionarioPage {

  constructor(public navCtrl: NavController) {

  }

  public goToLogin() {
    this.navCtrl.push(HomePage);

  }

}
