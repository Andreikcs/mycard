import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PessoaService } from './../../services/pessoaservice';
import { Pessoa } from './../../model/pessoa';
import { HomePage } from '../home/home';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { PessoaPage } from '../pessoa/pessoa';
/* Import Funciton */
import { ConfirmaFisica } from './../../model/function';
import { ErroDeCadastro } from './../../model/function';


@Component({
  selector: 'page-home',
  templateUrl: 'pessoa_fisica.html',
  providers: [PessoaService]
})

export class PessoaFisicaPage {

  public pessoa: Pessoa = new Pessoa();

/* Form Validator */

  public formgroup: FormGroup;
  public nome: AbstractControl;
  public email: AbstractControl;
  public senha: AbstractControl;

  constructor(public navCtrl: NavController,
    private pessoaService: PessoaService,
    formbuilder: FormBuilder) {

    this.formgroup = formbuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required]
 
    });

    this.nome = this.formgroup.controls['nome'];
    this.email = this.formgroup.controls['email'];
    this.senha = this.formgroup.controls['senha'];

  }

  public goToSave() {

    this.pessoa.tipo = 1;
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
