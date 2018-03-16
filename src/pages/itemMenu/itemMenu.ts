import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Atendimento } from '../atendimento/atendimento';

@Component({
  selector: 'page-home',
  templateUrl: 'itemMenu.html'
})


export class ItemMenu {
  constructor(public navCtrl: NavController) {
  }
  public goToAtendimento() {
    this.navCtrl.push(Atendimento);
  }
}







