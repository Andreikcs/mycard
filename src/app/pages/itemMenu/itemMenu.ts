import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { AtendimentoPage } from '../atendimento/atendimento';
  

@Component({
  selector: 'page-home',
  templateUrl: 'itemMenu.html'
})

export class ItemMenuPage {
    constructor(

      public navCtrl: NavController,
      private ActionSheetController: ActionSheetController) {
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

 
}







