import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PessoaService } from '../../services/pessoaservice';
import { Pessoa } from '../../model/pessoa';
import { Cidade } from './../../model/cidade';
import { CidadeService } from './../../services/cidade-service';



@Component({
  selector: 'page-home',
  templateUrl: 'empresa_perfil.html',
  providers: [PessoaService, CidadeService]
})

export class EmpresaPerfilPage {

  public empresa: Pessoa = new Pessoa();

  public cidades: Array<Cidade>;

  constructor(public navCtrl: NavController, 
    public pessoaService: PessoaService,
    private cidadeService: CidadeService) {
    this.buscarEmpresa();
  }

  public goToLogin() {
    this.navCtrl.push(HomePage);

  }

  public buscarCidades() {
    this.cidadeService.buscarPorNome("").subscribe((lista: Cidade[]) => {
      this.cidades = lista;
    })
  }

  public buscarEmpresa() {
    let pessoa: any = JSON.parse(localStorage.getItem('pessoa'));
    this.pessoaService.findById(pessoa.id).subscribe(
      data => {
        this.empresa = data;
      },
      err => {
        console.error(err);
      }
    )
  }

}
