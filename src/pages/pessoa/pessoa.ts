import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PessoaFisica } from '../pessoa_fisica/pessoa_fisica';
import { PessoaJuridica } from '../pessoa_juridica/pessoa_juridica';


@Component({
  selector: 'page-home',
  templateUrl: 'pessoa.html'
})
export class Pessoa {

  constructor(public navCtrl: NavController) {

  } 

  public goToFisica() {
    this.navCtrl.push(PessoaFisica);
  }

  public goToJuridica() {
    this.navCtrl.push(PessoaJuridica);
  }

} 
