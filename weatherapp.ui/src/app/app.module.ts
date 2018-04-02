import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { CityService } from '../services/city.Service';

import { AppComponent } from './app.component';
import { HomePage } from '../pages/home/home';
import { CitiesPage } from '../pages/cities/cities';
import {AddCitiesPage } from '../pages/cities/addCities'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    CitiesPage,
    AddCitiesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HomePage,
    CitiesPage,
    AddCitiesPage
  ],
  providers: [
    CityService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
