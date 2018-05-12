import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from './pages/home/home';
import { PessoaPage } from './pages/pessoa/pessoa';
import { PessoaFisicaPage } from './pages/pessoa_fisica/pessoa_fisica';
import { PessoaJuridicaPage } from './pages/pessoa_juridica/pessoa_juridica';
import { ItemMenuPage } from './pages/itemMenu/itemMenu';
import { AtendimentoPage } from './pages/atendimento/atendimento';
import { ConfiguracaoPage } from './pages/configuracao/configuracao';
import { SenhaPage } from './pages/senha/senha';
import { FavoritosPage } from './pages/favoritos/favoritos';
import { httpFactory} from './http.factory';
import { HttpModule,XHRBackend, RequestOptions, Http ,JsonpModule} from '@angular/http';

import { PessoaPerfilPage } from './pages/pessoa_perfil/pessoa_perfil';
import { EmpresaPerfilPage } from './pages/empresa_perfil/empresa_perfil';
import { EmpresaHomePage } from './pages/empresa_home/empresa_home';
import { EmpresaServicoPage } from './pages/empresa_servico/empresa_servico';
import { EmpresaSetorPage } from './pages/empresa_setor/empresa_setor';
import { EmpresaFuncionarioPage } from './pages/empresa_funcionario/empresa_funcionario';
import { PerfilFuncionarioPage } from './pages/perfil_funcionario/perfil_funcionario';

/*---- MAK --- */
import { AppMaskerModule } from 'brmasker-ionic';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PessoaPage,
    PessoaFisicaPage,
    PessoaJuridicaPage,
    ItemMenuPage,
    AtendimentoPage,
    ConfiguracaoPage,
    SenhaPage,
    FavoritosPage,
    PessoaPerfilPage,
    EmpresaPerfilPage,
    EmpresaHomePage,
    EmpresaServicoPage,
    EmpresaSetorPage,
    EmpresaFuncionarioPage,
    PerfilFuncionarioPage
    
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AppMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PessoaPage,
    PessoaFisicaPage,
    PessoaJuridicaPage,
    ItemMenuPage,
    AtendimentoPage,
    ConfiguracaoPage,
    SenhaPage,
    FavoritosPage,
    PessoaPerfilPage,
    EmpresaPerfilPage,
    EmpresaHomePage,
    EmpresaServicoPage,
    EmpresaSetorPage,
    EmpresaFuncionarioPage,
    PerfilFuncionarioPage
  
      ],
  providers: [
    StatusBar,
    SplashScreen,
    JsonpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})


export class AppModule {}


