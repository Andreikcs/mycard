import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
//import { ItemMenu } from '../pages/itemMenu/itemMenu';
//import { Atendimento } from '../pages/atendimento/atendimento';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = HomePage;
 // ItemMenu:any = ItemMenu;  
  //rootAtendimento: Atendimento;
  constructor(platform: Platform) {
     //constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    //platform.ready().then(() => {
   //statusBar.styleDefault();
  //splashScreen.hide();
    this.rootPage = HomePage;
   // this.ItemMenu = ItemMenu;
   

  }
}

