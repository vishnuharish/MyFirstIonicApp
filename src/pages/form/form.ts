import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import {HomeServices} from '../home/home.services';
/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  user:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private homeService:HomeServices) {
    this.user = this.navParams.get('user')
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  updateUser(user:any[]){
    console.log(user);
    this.homeService.updateUser(user)
    .subscribe(result => { 
      console.log(result); 
      this.user = result; }, error => console.log(error))
  }

}
