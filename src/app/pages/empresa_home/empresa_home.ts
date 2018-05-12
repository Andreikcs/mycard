import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'empresahome-css',
  templateUrl: 'empresa_home.html'
})

export class EmpresaHomePage {

  constructor(public navCtrl: NavController) {
   
  }

  public goToLogin() {
    this.navCtrl.push(HomePage);

  }

}
