import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pessoa } from '../pessoa/pessoa';
import { ItemMenu } from '../itemMenu/itemMenu';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  public goToMenu() {
    this.navCtrl.setRoot(ItemMenu);
  }

  public goToPessoa() {
    this.navCtrl.push(Pessoa);
  }

}
