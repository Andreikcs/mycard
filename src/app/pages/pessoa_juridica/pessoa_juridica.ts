import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PessoaService } from './../../services/pessoaservice';
import { Pessoa } from './../../model/pessoa';
import { CidadeService } from './../../services/cidade-service';
import { Cidade } from './../../model/cidade';



@Component({
  selector: 'page-home',
  templateUrl: 'pessoa_juridica.html',
  providers: [PessoaService,CidadeService]
})

export class PessoaJuridicaPage {
  
  public pessoa: Pessoa = new Pessoa();

  public cidades:Array<Cidade>;

  constructor(public navCtrl: NavController,
    private pessoaService: PessoaService ,
    private cidadeService: CidadeService) {
    this.buscarCidades();

  }

public buscarCidades(){
  this.cidadeService.buscarPorNome("").subscribe((lista:Cidade[])=>{
   this.cidades= lista;
  })
}

  public goToSave() {
   this.pessoa.tipo = 2;
    this.pessoaService.save(this.pessoa).subscribe((pes) => {
      if (pes != null) {
         this.pessoa = pes;
      }
    }, error => {
    });
  }

  public goToHome() {
    this.navCtrl.push(HomePage);
  }

}


