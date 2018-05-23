import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestaurantService } from '../../services/restaurantService';
import { FoodService } from "../../services/foodService";

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

    restaurant = {
        name: ''
    };
    infoArray = [];
    food: any;
    menuItems= [];
    constructor(
        private route: ActivatedRoute,
        private restaurantService: RestaurantService,
        private foodService: FoodService
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
            this.convertToInfoObject();
        });
        this.foodService.getFood().toPromise().then( data => {
            this.food = data.food;
            console.log(this.food);
            this.createMenu();
            console.log(this.menuItems)
            this.createFoodArray();
            console.log(this.menuItems)
        })
       
    }

    convertToInfoObject() {
        Object.keys(this.restaurant).forEach( i => {
            console.log(i);
            console.log(this.restaurant[i]);
            const objekat = {
                key: i,
                value: this.restaurant[i]
            }
            this.infoArray.push(objekat);
        });
    }

    createMenu() {
        this.food.forEach( food => {
            if(!this.menuItems.some( menuItem => menuItem.name === food.typeF)) {
                this.menuItems.push({
                    name: food.typeF,
                    items: []
                });
            }
        })
    }

    createFoodArray() {
        this.menuItems.forEach(menuItem => {
            this.food.forEach(food => {
                if(food.typeF === menuItem.name) {
                    menuItem.items.push(food);
                }
            })
        })
    }

}