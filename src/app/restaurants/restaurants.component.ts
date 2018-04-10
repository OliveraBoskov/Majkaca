import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../services/restaurantService";

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit{

    name: string;
    location: string;
    phoneNumber: string;
    description: string;
    nizRestorana = [];

    constructor (private restaurantService: RestaurantService) {}

    ngOnInit() {
        
        this.restaurantService.getRestaurants().subscribe(data => {
            console.log(data);
            this.nizRestorana = data.restaurants;
        })
    }
}