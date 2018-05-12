import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { AtendimentoPage } from '../atendimento/atendimento';
import { CidadeService } from './../../services/cidade-service';
import { Cidade } from './../../model/cidade';
import { PessoaService } from './../../services/pessoaservice';
import { Pessoa } from './../../model/pessoa';
import { SetorService } from '../../services/setor-service';
import { Setor } from '../../model/setor';



@Component({
  selector: 'page-home',
  templateUrl: 'itemMenu.html',
  providers: [PessoaService, CidadeService, SetorService]
})

export class ItemMenuPage {
  public pessoa: Pessoa = new Pessoa();
  public empresas: Array<Pessoa>;

  public cidades: Array<Cidade>;
  public cidade:Cidade;
  public setores: Array<Setor>;
  public setor: Setor = new Setor();


  constructor(

    public navCtrl: NavController,
    private ActionSheetController: ActionSheetController,
    private cidadeService: CidadeService,
    private pessoaService: PessoaService,
    private setorService: SetorService) {

    this.buscarCidades(); 

    this.getEmpresa(); 
  }

  public buscarCidades() {
    this.cidadeService.buscarPorNome("").subscribe((lista: Cidade[]) => {
      this.cidades = lista;
    })
  }

  public getSetores() {
    this.setorService.buscarPorCidade(this.cidade) .subscribe((lista: Setor[]) => {
      this.setores = lista;
    })
  }


  public getEmpresa() {
    this.pessoaService.buscarPorTipo(2).subscribe((lista: Pessoa[]) => {
      this.empresas = lista;
    })
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
  goToinfo() {
    this.navCtrl.push(AtendimentoPage);
  }



 



}







