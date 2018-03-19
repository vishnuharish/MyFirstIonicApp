import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import {HomeServices} from '../home/home.services';
import {HomePage} from '../home/home';
import {FormPage} from '../form/form'; 

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  id:string;
  user:any[];	
  showForm:boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.user = this.navParams.get('user');
   // this.id = this.user.id
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  
  editUser(id: string){
    this.navCtrl.push(FormPage,{'user':this.user});
  }	
 
// cancel(){
//  this.navCtrl.push(HomePage);	
//  }

}
