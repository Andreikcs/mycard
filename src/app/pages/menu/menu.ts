import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
})

export class Menu {
    constructor(public navCtrl: NavController) {
    }
    public goToMenu() {
        this.navCtrl.setRoot(Menu);
    }
}