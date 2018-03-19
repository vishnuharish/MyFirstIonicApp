import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeServices } from '../pages/home/home.services';
import { ProfilePage } from '../pages/profile/profile';
import {FormPage} from '../pages/form/form';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    FormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    FormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HomeServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
