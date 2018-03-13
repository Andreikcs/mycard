import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pessoa } from '../pessoa/pessoa';
import { Menu } from '../menu/menu';
  
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  public goToMenu() {
    this.navCtrl.setRoot(Menu);
  }

  public goToPessoa() {
    this.navCtrl.push(Pessoa);
  }

}
