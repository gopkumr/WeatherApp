import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CityService } from '../../services/city.Service';
import { HomePage } from '../home/home';
import {AddCitiesPage} from '../cities/addCities'

@Component({
  selector: 'cities-list',
  templateUrl: 'cities.html'
})
export class CitiesPage {
  selectedCity: any;
  cities: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public cityService: CityService, public modalController: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedCity = navParams.get('city');

    this.cities = [];
    for (let city of cityService.GetCities()) {
        this.cities.push({
          title: city,
          note: 'test',
          icon: 'test'
        });
    }
  }

  cityClicked(event, clickedCity) {
    this.navCtrl.setRoot(HomePage,{
      city: clickedCity
    });
  }

  addCityClicked() {
    let profileModal = this.modalController.create(AddCitiesPage);
    profileModal.present();
  }
}
