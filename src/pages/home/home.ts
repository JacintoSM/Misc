import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';


import { DEVELOPERS } from '../../data/data.developers';
import { DeveloperInterface } from './../../interfaces/developer.interface';
import { DeveloperDetailPage } from '../developer-detail/developer-detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  developerList:DeveloperInterface[]=[];
  counter:number=0;

  // TODO: Use this variable to push Developer Page
  developerPage:any=DeveloperDetailPage;

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public alertCtrl: AlertController) {

    this.developerList = DEVELOPERS.slice(0);
    this.counter = this.developerList.length;

  }

  // TODO: Method to navigate Developer Page and send data object
  sendDeveloperData(developer:DeveloperInterface){
    this.navCtrl.push(this.developerPage, {'developer': developer});
  }

  // TODO: Method to show/hide menu
  showMenu(){
    this.menuCtrl.toggle();
  }


  // TODO: Method to show a custom alert
  aboutMiscApp(){
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: `
      <img src="../../assets/imgs/logo.png" height="100" width="100">
      <h4 ion-text color="danger">Misc App</h4>
      <p>This app is only available per this course.</p>
      <p>
        <br> by Ionic Framework
        <br><i ion-text color="primary">(c)</i> copyleft 2018
        <br>Madrid
      </p>
    `,
      buttons: ['OK']
    });
    alert.present();
  }

}
