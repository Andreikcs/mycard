import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Setor } from './../../model/setor';
import { SetorService } from './../../services/setor-service';


@Component({
  selector: 'page-setor',
  templateUrl: 'empresa_setor.html',
  providers: [SetorService]
})

export class EmpresaSetorPage {
 
  public setor: Setor = new Setor();

  constructor(public navCtrl: NavController,
    private setorService: SetorService ) {
  
  }

  public goToSave() {

    this.setorService.save(this.setor).subscribe((pes) => {
      
    }, error => {
    });
  }

}
