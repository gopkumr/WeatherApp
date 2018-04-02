import { Injectable } from "@angular/core"

@Injectable()
export class CityService {

    GetCities():any[]{
        let cities: any[]=[];
        cities = ["Bangalore", "Melbourne", "New York"];
        return  cities;
    }

}