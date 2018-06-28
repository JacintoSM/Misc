
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomePage } from './../home/home';

@IonicPage()
@Component({
  selector: 'page-apps',
  templateUrl: 'apps.html',
})
export class AppsPage {

  homePage:any=HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toBack(){
    this.navCtrl.pop();
  }

  goToRoot(){
    this.navCtrl.setRoot(this.homePage);
    // this.navCtrl.popToRoot();
  }

}
