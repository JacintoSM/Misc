import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

import { HomePage } from './../home/home';

// TODO: Providers
import { MiscProvider } from './../../providers/misc/misc';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  homePage:any=HomePage;

  developerList:any[]=[];
  list:any[]=[];

  id:string;
  name:string;
  position:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _miscProvider:MiscProvider,
              public toastCtrl: ToastController) {

          let promise = new Promise((resolve, reject)=>{
              this._miscProvider.items.subscribe(              
                data=>{
                    if(data == null){
                      console.log('No hay datos!!');                      
                      reject();
                    }else{
                      console.log('Los datos se han recibido correctamente');                      
                      resolve(true);
                    }

                    this.developerList = data;
                    for (let key in data) {
                      this.list.push(data[key]);
                    }                                
                }              
              )
          }).catch(err=>{
            console.error('Ha ocurrido un error!!!');            
          });
          
  }


  // TODO: Crompueba si una cadena está vacia
  isEmpty(str) {
    return (!str || 0 === str.length);
  }

  // TODO: Presenta un toast al usuario
  presentToast(message:string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  // TODO: Method to add a new developer
  addNew(){
    if(this.isEmpty(this.id) || this.isEmpty(this.name) || this.isEmpty(this.position)){
      this.presentToast('Datos vacios');
    }else{
      this._miscProvider.newDeveloper(this.id, this.name, this.position);     
    }
    this.clearArray(this.list);

  }

  // TODO: Method to clean an array
  clearArray(array) {
    while (array.length) {
      array.pop();
    }
  }


  // TODO: Method to go at HomePage
  goToRoot(){
    this.navCtrl.setRoot(this.homePage);
  }

}
