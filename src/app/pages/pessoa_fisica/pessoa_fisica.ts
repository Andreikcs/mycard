import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PessoaService } from './../../services/pessoaservice';
import { Pessoa } from './../../model/pessoa';
import { HomePage } from '../home/home';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'pessoa_fisica.html',
  providers: [PessoaService]
})

export class PessoaFisicaPage {
  /*
  public formgroup: FormGroup;
  public nome: AbstractControl;
  public email: AbstractControl;
  public senha: AbstractControl;
*/

  /*variaveis de erro */
  //errorNome = false;
  //errorEmail = false;
  //errorSenha = false;
  /*Var de MSG*/
  //msgNome = "";
  //msgEmail = "";
  //msgSenha = "";

  public pessoa: Pessoa = new Pessoa();


  constructor(public navCtrl: NavController,
    private pessoaService: PessoaService,
    formbuilder: FormBuilder) {

    /* Validators Form*/
    /*
      this.PessoaFisicaForm = formbuilder.group({
  
        nome: ['', Validators.compose([Validators.pattern('[a-zA-Z]*'), Validators.required])],
  
        email: ['', Validators.compose([Validators.required, Validators.minLength(2),
        Validators.pattern('[a-z0-9 ._% + -] + @ [a-z0-9 .-] + \. [az] {2,4} $')])],
  
        senha: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20),
        Validators.required])]
      })
  
    }
  
   
    PessoaFisicaController(nome, email, senha): Observable<Pessoa> {
      //let { nome, email, senha } = this.PessoaFisicaForm.controls;
      if (!this.PessoaFisicaForm.valid) {
        if (!nome.valid) {
          this.errorNome = true;
          this.msgNome = 'Ops! Informe seu Nome.';
          return Observable.of();
        } else if (!email.valid) {
          this.errorEmail = true;
          this.msgEmail = 'Ops! Precisamos de um E-mail Válido.';
          return Observable.of();
        } else if (!senha.valid) {
          this.errorSenha = true;
          this.msgSenha = 'Ops! Sua senha precisa ter de 3 a 20 caracteres.';
          return Observable.of();
        } else {
          alert("Cadastro Realizado com Sucesso!");
  
        }
       } */
 
 //   this.formgroup = formbuilder.group({
     /* nome: ['', Validators.required],
      email:['', Validators.required],
      senha:['', Validators.required], */
   /*   nome: ['', Validators.compose([Validators.pattern('[a-zA-Z]*'), Validators.required])],

      email: ['', Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern('[a-z0-9 ._% + -] + @ [a-z0-9 .-] + \. [az] {2,4} $')])],

      senha: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20),
      Validators.required])]

    });

    this.nome = this.formgroup.controls['nome'];
    this.email = this.formgroup.controls['email'];
    this.senha = this.formgroup.controls['senha'];



  }
*/
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

}
