import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Servico } from './../../model/servico';
import { ServicoService } from './../../services/servico-service';
import { Setor } from './../../model/setor';
import { SetorService } from './../../services/setor-service';




@Component({
  selector: 'page-servico',
  templateUrl: 'empresa_servico.html',
  providers: [ServicoService,SetorService]

})

export class EmpresaServicoPage {

  public servico: Servico = new Servico();
 
   
  public setores: Array<Setor>;
  public setor: Setor = new Setor();

   

  constructor(public navCtrl: NavController,
    private servicoService: ServicoService,
    private setorService: SetorService) {

    this.getSetores();

  }

  public getSetores() {
    this.setorService.buscarPorNomeSetor("").subscribe((lista: Setor[]) => {
      this.setores = lista;
    })
  }


  public goToSave() {
    let objPessoa = localStorage.getItem("pessoa");
    let pessoa = JSON.parse(objPessoa);
    this.servico.empresa = pessoa;
    this.servico.setor = this.setor;


    this.servicoService.save(this.servico).subscribe((pes) => {

    }, error => {
    });
  }

}
