import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeServices } from './home.services';
import { ProfilePage } from '../profile/profile';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users:any[];
  constructor(public navCtrl: NavController, private homeService: HomeServices) {
      this.homeService.getUsers()
      .subscribe( result => {this.users = result; 
                    console.log(result)} ,
                     error => console.log(error));
  }

  showUser(user){
      console.log(user);
      this.navCtrl.push(ProfilePage,{'user':user});

  }

}
