import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';


import { DeveloperInterface } from './../../interfaces/developer.interface';


@IonicPage()
@Component({
  selector: 'page-developer-detail',
  templateUrl: 'developer-detail.html',
})
export class DeveloperDetailPage {

  data:DeveloperInterface;
  appList:string[]=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
     this.data = this.navParams.get('developer');

    for (let key in this.data.apps) {
      // console.log(this.data.apps[key]);
      this.appList.push(this.data.apps[key]);
    }

  }


  // TODO: Method about app
  aboutMiscApp(app:string){
    const prompt = this.alertCtrl.create({
      title: app + ' Login',
      message: "Enter to key secret for " + app + " app",
      inputs: [
        {
          name: 'secret',
          placeholder: 'Key secret'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log('Ok clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
