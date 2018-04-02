import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { CityService } from '../../services/city.Service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 private cities: any[];
 private city:any;
 private selectedCityIndex:number;

 @ViewChild(Slides) slides:Slides;

  constructor(public navCtrl: NavController,navParams: NavParams, cityService: CityService) {
    this.cities=cityService.GetCities();
    this.city=navParams.get('city');
    if(this.city){
    this.selectedCityIndex=this.cities.findIndex(q=>q==this.city.title);
    }
  }

  ngAfterViewInit(){
    if(this.selectedCityIndex>=0)
    {
      //this.slides.slideTo(1,500);
    }
  }

}
