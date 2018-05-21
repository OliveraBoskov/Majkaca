import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../services/restaurantService";
import { Router } from "@angular/router";

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

    constructor (
        private restaurantService: RestaurantService,
        private router: Router,
    ) {}

    ngOnInit() {
        
        this.restaurantService.getRestaurants().subscribe(data => {
            console.log(data);
            this.nizRestorana = data.restaurants;
        })
    }

    //PRAVIM DINAMICKU ROUTU
    onRestroraunt(restoran) {
        console.log('pritisnuo ' + restoran.id);
        const id = restoran.id;
        this.router.navigateByUrl('/restaurants/' + id);   
    }
}