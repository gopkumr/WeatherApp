import {Component} from '@angular/core'
import { ViewController } from 'ionic-angular'

@Component({
    selector:'add-city',
    templateUrl:'addcities.html'
})
export class AddCitiesPage{
    cityName:any;
    shouldShowCancel:boolean;
    searchedCities:any[];

    constructor(public viewCtrl : ViewController ){
        this.shouldShowCancel=true;
    }

    onInput(event:any){
        console.log(event.target.value);

        this.searchedCities = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima'
            ];

    }

    onCancel(event:any){

    }

    closeModal(){
        this.viewCtrl.dismiss();
    }

    addSelectedCityClicked(){
        this.viewCtrl.dismiss();
    }

}