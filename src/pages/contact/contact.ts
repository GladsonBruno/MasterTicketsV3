import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController, App } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public app: App) {

  }

  items = [
    'Perfil',
    'Configuração',
    'Sair'
          ];

    presentLoading(message:string) {
      let loader = this.loadingCtrl.create({
        content: message,
        duration: 2000
      });
      loader.present();
    }
logOutApp(){
  const root = this.app.getRootNav();
  root.popToRoot();
}

logOut(item:string){
  if(item == 'Sair'){
  this.presentLoading('Até Logo!');
  this.logOutApp();
  }else{
    console.log(item);
  }
}

}
