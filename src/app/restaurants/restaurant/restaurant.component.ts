import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestaurantService } from '../../services/restaurantService';

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

    restaurant: any;

    constructor(
        private route: ActivatedRoute,
        private restaurantService: RestaurantService
    ) {}

    ngOnInit() {
        //kako dobijam koji je id gore
        //izvlacimo path parametar
        const id = this.route.snapshot.params.id;
        // id zato sto je u routing :id
        this.restaurantService.getSingleRestaurant(id).toPromise()
        .then( data => {
            console.log(data);
            // neki objekat ce biti sve sto je stiglo sa servera
            this.restaurant = data;
        })
    }

}