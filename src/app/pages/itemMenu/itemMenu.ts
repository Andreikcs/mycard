import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { AtendimentoPage } from '../atendimento/atendimento';
import { CidadeService } from './../../services/cidade-service';
import { Cidade } from './../../model/cidade';
import { PessoaService } from './../../services/pessoaservice';
import { Pessoa } from './../../model/pessoa';

  

@Component({
  selector: 'page-home',
  templateUrl: 'itemMenu.html',
  providers: [PessoaService, CidadeService]
})

export class ItemMenuPage { 
  public pessoa: Pessoa = new Pessoa();

  public cidades: Array<Cidade>;

  constructor(

      public navCtrl: NavController,
      private ActionSheetController: ActionSheetController,
      private cidadeService: CidadeService,
      private pessoaService: PessoaService) {
      
        this.buscarCidades();

    }



  public goToAtendimento() {
    this.navCtrl.push(AtendimentoPage);
  }

  public goToSenha() {
    
   
    let goToSenhaAction = this.ActionSheetController.create({
    
      title: "Minha Senha",
      buttons: [
        {
          text: "Salvar",
          icon: "cloud-download",
        },
        {
          text: "Atualizar",
          icon: "refresh-circle",
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: "thumbs-down",
          handler: () => {
            console.log('Destructive clicked');
          }
        },
      ]
    });
   
    goToSenhaAction.present();    
   }
    goToinfo(){
    this.navCtrl.push(AtendimentoPage);
  }

 

  public buscarCidades() {
    this.cidadeService.buscarPorNome("").subscribe((lista: Cidade[]) => {
      this.cidades = lista;
    })
  }



}







