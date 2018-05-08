import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PessoaFisicaPage } from '../pessoa_fisica/pessoa_fisica';
import { PessoaJuridicaPage } from '../pessoa_juridica/pessoa_juridica';


@Component({
  selector: 'pessoa-css',
  templateUrl: 'pessoa.html'
})
export class PessoaPage {

  constructor(public navCtrl: NavController) {

  } 

  public goToFisica() {
    this.navCtrl.push(PessoaFisicaPage);
  }

  public goToJuridica() {
    this.navCtrl.push(PessoaJuridicaPage);
  }

} 
