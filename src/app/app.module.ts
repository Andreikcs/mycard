import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Pessoa } from '../pages/pessoa/pessoa';
import { Menu} from '../pages/menu/menu';
import { PessoaFisica } from '../pages/pessoa_fisica/pessoa_fisica';
import { PessoaJuridica } from '../pages/pessoa_juridica/pessoa_juridica';
//import { Login } from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Menu,
    Pessoa,
    PessoaFisica,
    PessoaJuridica,
  //  Login
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Menu,
    Pessoa,
    PessoaFisica,
    PessoaJuridica,
    //Login
      ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
