import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AtendimentoPage } from './pages/atendimento/atendimento';
import { ItemMenuPage } from './pages/itemMenu/itemMenu';
import { ConfiguracaoPage } from './pages/configuracao/configuracao';
import { HomePage } from './pages/home/home';
import { SenhaPage } from './pages/senha/senha';
import { FavoritosPage } from './pages/favoritos/favoritos';
import { PessoaPerfilPage } from './pages/pessoa_perfil/pessoa_perfil';
import { EmpresaPerfilPage } from './pages/empresa_perfil/empresa_perfil';
import { EmpresaHomePage } from './pages/empresa_home/empresa_home';
import { EmpresaServicoPage } from './pages/empresa_servico/empresa_servico';
import { EmpresaSetorPage } from './pages/empresa_setor/empresa_setor';
import { PessoaService } from './services/pessoaservice';
import { Pessoa } from './model/pessoa';




@Component({
  templateUrl: 'app.html',
  selector: 'menu-page',
  providers: [PessoaService]
  //styleUrls: ['app.scss']
})

export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage: any;

  public pages: Array<{ titulo: string, component: any, icon: string }> = [

  ];
 
  public pessoa: Pessoa = new Pessoa();

  public verificarLogin: Function;

  constructor(public platform: Platform) {
    
    let me = this;
    
    // this.platform.ready().then(()  => {
    //   this.verificarLogin = (tipo) => {
       
    // });

  }


  public goToPage(page) {
    this.nav.setRoot(page);
  } 

  public getPages():Array<any>{
    let pObject = localStorage.getItem("pessoa");
    let pessoa: Pessoa = JSON.parse(pObject);
    if (pessoa.tipo == 1) {  
      this.carregaPessoaFisica();
    } else if (pessoa.tipo == 2){
      this.rootPage = EmpresaHomePage;
      this.carregaPessoaJuridica();
    }
    return this.pages;
  }

  /********************** Perfil Pessoa Fisica *********************/
  public carregaPessoaFisica() {
    this.rootPage = HomePage;
    this.pages = [
    

      { titulo: 'Home', component: ItemMenuPage, icon: 'menu' },
      // { titulo: 'Meu Perfil', component: PessoaPerfilPage, icon: 'person' },
      { titulo: 'Minhas Senhas', component: SenhaPage, icon: 'card' },
      { titulo: 'Meus Favoritos', component: FavoritosPage, icon: 'heart' },
      { titulo: 'Configurações', component: ConfiguracaoPage, icon: 'settings' },
      { titulo: 'Logout', component: HomePage, icon: 'power' },
    ];
  }

  /***************  Perfil Pessoa Juridica  **********************/
  public carregaPessoaJuridica() {
    this.rootPage = EmpresaHomePage;
    this.pages = [
      { titulo: 'Dashboard', component: EmpresaHomePage, icon: 'desktop' },
      { titulo: 'Minha Empresa', component: EmpresaPerfilPage, icon: 'podium' },
      { titulo: 'Meus Setores', component: EmpresaSetorPage, icon: 'filing' },
      { titulo: 'Meus Serviços', component: EmpresaServicoPage, icon: 'build' },
      //  { titulo: 'Configurações', component: ConfiguracaoPage, icon: 'settings' },
      { titulo: 'Logout', component: HomePage, icon: 'power' }
    ];

  }
}
