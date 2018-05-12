import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  itemsTotal:Observable<any[]>;
  itemsTotal2:Observable<any[]>;
  itemsTotal3:Observable<any[]>;
  servico:string;
  number:number;
  tipo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private view:ViewController 
    ,public database:AngularFireDatabase) {
      this.servico = this.navParams.get('servico');
      this.number = this.navParams.get('number');
      this.tipo = this.navParams.get('tipo');
     console.log(this.servico,this.number,this.tipo)
      if(this.servico == 'Firma e Autenticação')
      {
          if(this.tipo === 'Normal' )
          {
                this.itemsTotal = this.database.list('reconhececimentoFirma/', ref => ref.child('number').endAt(this.number)).snapshotChanges().map(arr => {
                      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
                });
                this.itemsTotal2 = this.database.list('reconhececimentoFirma/', ref => ref.orderByChild('typeTicket').equalTo('Normal')).snapshotChanges().map(arr => {
                  return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
                });              
                this.itemsTotal3 = (this.itemsTotal && this.itemsTotal2);
               
          }else if(this.tipo === 'Preferencial')
          {

            this.itemsTotal = this.database.list('reconhececimentoFirma/', ref => ref.orderByChild('number').endAt(this.number)).snapshotChanges().map(arr => {
                  return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
              });
            this.itemsTotal2 = this.database.list('reconhececimentoFirma/', ref => ref.orderByChild('typeTicket').equalTo('Preferencial')).snapshotChanges().map(arr => {
              return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
            });
          
            this.itemsTotal3 = (this.itemsTotal && this.itemsTotal2);
          }
      
      }
      else if(this.servico === 'Procuração')
      {
          if(this.tipo === 'Normal')
          {
            this.itemsTotal = this.database.list('procuracao/', ref => ref.orderByChild('number').endAt(this.number)).snapshotChanges().map(arr => {
                  return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
            });
            this.itemsTotal2 = this.database.list('procuracao/', ref => ref.orderByChild('typeTicket').equalTo('Normal')).snapshotChanges().map(arr => {
              return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
            });
          
            this.itemsTotal3 = (this.itemsTotal && this.itemsTotal2);
          }else
          {
            this.itemsTotal = this.database.list('procuracao/', ref => ref.orderByChild('number').endAt(this.number)).snapshotChanges().map(arr => {
              return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
             });
            this.itemsTotal2 = this.database.list('procuracao/', ref => ref.orderByChild('typeTicket').equalTo('Preferencial')).snapshotChanges().map(arr => {
              return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
            });
         
            this.itemsTotal3 = (this.itemsTotal && this.itemsTotal2);


          }
      }else if(this.servico === 'Registro Civil')
      {
          if(this.tipo === 'Normal')
          {
            this.itemsTotal = this.database.list('registroCivil/', ref => ref.orderByChild('number').endAt(this.number)).snapshotChanges().map(arr => {
                  return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
            });
            this.itemsTotal2 = this.database.list('registroCivil/', ref => ref.orderByChild('typeTicket').equalTo('Normal')).snapshotChanges().map(arr => {
              return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
            });
           
            this.itemsTotal3 = (this.itemsTotal && this.itemsTotal2);
          }else
          {
            this.itemsTotal = this.database.list('registroCivil/', ref => ref.orderByChild('number').endAt(this.number)).snapshotChanges().map(arr => {
              return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
            });
            this.itemsTotal2 = this.database.list('registroCivil/', ref => ref.orderByChild('typeTicket').equalTo('Preferencial')).snapshotChanges().map(arr => {
              return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
           });
       
          this.itemsTotal3 = (this.itemsTotal && this.itemsTotal2);

          }
      
          }else if(this.servico === 'Escritura')
          {
            if(this.tipo === 'Normal')
            {
                this.itemsTotal = this.database.list('escritura/', ref => ref.orderByChild('number').endAt(this.number)).snapshotChanges().map(arr => {
                  return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
                });
                this.itemsTotal2 = this.database.list('escritura/', ref => ref.orderByChild('typeTicket').equalTo('Normal')).snapshotChanges().map(arr => {
                  return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
              });
             
              this.itemsTotal3 = (this.itemsTotal && this.itemsTotal2);
            }else
            {
              this.itemsTotal = this.database.list('escritura/', ref => ref.orderByChild('number').endAt(this.number).orderByChild('typeTicket').equalTo('Normal')).snapshotChanges().map(arr => {
                return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
              });
              this.itemsTotal2 = this.database.list('escritura/', ref => ref.orderByChild('typeTicket').equalTo('Preferencial')).snapshotChanges().map(arr => {
                return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
              });
            
              this.itemsTotal3 = (this.itemsTotal && this.itemsTotal2);
            }
        }

  }

  ionViewWillLoad() {
 
 
  }

  closeModal(){
    this.view.dismiss();
  }

}
