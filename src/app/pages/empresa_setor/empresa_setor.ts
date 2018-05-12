import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Setor } from './../../model/setor';
import { SetorService } from './../../services/setor-service';
import { Observable } from 'rxjs/Observable'
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'page-setor',
  templateUrl: 'empresa_setor.html',
  providers: [SetorService]
})

export class EmpresaSetorPage {

  public setor: Setor = new Setor();

  myform: FormGroup;

  constructor(public navCtrl: NavController,
    private setorService: SetorService) {


    this.myform = new FormGroup({

      setor: new FormControl('', Validators.required)

    })
  }



  public goToSave() {
    this.setorService.save(this.setor).subscribe((pes) => {
    }, error => {
    });
  }

}
