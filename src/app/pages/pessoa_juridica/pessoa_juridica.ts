import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PessoaService } from './../../services/pessoaservice';
import { Pessoa } from './../../model/pessoa';
import { CidadeService } from './../../services/cidade-service';
import { Cidade } from './../../model/cidade';
import { PessoaPage } from '../pessoa/pessoa';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AppMaskerModule } from 'brmasker-ionic';





@Component({
  selector: 'page-home',
  templateUrl: 'pessoa_juridica.html',
  providers: [PessoaService, CidadeService]

})

export class PessoaJuridicaPage {

  public pessoa: Pessoa = new Pessoa();
  public cidades: Array<Cidade>;

  /* -------------------Validação------------------------------------*/

  myform: FormGroup;



  constructor(public navCtrl: NavController,
    private pessoaService: PessoaService,
    private cidadeService: CidadeService) {

    this.buscarCidades();

    /*------------------ validacao ---------------*/

    this.myform = new FormGroup({

      nome: new FormControl('', Validators.required),
      cnpj: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      email: new FormControl('', Validators.pattern(".+\@.+\..+")),
      senha: new FormControl('', [Validators.required, Validators.minLength(8)])


    })
  }


  public buscarCidades() {
    this.cidadeService.buscarPorNome("").subscribe((lista: Cidade[]) => {
      this.cidades = lista;
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


  public goToPessoa() {
    this.navCtrl.push(PessoaPage);
  }

}


