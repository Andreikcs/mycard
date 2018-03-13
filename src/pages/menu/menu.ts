import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PessoaFisica } from '../pessoa_fisica/pessoa_fisica';
//import { Menu } from '../menu/menu';

@Component({
    selector: 'page-home',
    templateUrl: 'menu.html'
})
export class Menu {

    rootPage = PessoaFisica;

    constructor(public navCtrl: NavController) {
      
    }

} 
