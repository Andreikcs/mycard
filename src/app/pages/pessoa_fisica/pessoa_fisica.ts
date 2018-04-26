import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PessoaService } from './../../services/pessoaservice';
import { Pessoa } from './../../model/pessoa';


@Component({
  selector: 'page-home',
  templateUrl: 'pessoa_fisica.html',
  providers:[PessoaService]
})

export class PessoaFisicaPage {
     public pessoa : Pessoa= new Pessoa();

     constructor(public navCtrl: NavController,
     private pessoaService: PessoaService) {

  }

  public goToSave() {
    this.pessoa.tipo=1;
    
    this.pessoaService.save(this.pessoa).subscribe((pes) => {
      if (pes != null) {
        this.pessoa= pes;
      }
    }, error => {

    });
  }

}
