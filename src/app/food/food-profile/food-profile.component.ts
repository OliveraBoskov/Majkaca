import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "../../services/foodService";

@Component({
    selector: 'app-food-profile',
    templateUrl: './food-profile.component.html'
})

export class FoodProfileComponent implements OnInit {
    food = {
        name: ''
    };
    infoArray = [];
    

    //sredjujemo
    sideDish = [];
    prilozi = {
        name: '',
        items: []
    }

    constructor(
        private route: ActivatedRoute,
        private foodService: FoodService
    ){}

    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.foodService.getSingleFood(id).toPromise()
        .then(data => {
            this.food = data;
            //za unutrasnji child setujem naslov iz food.name jer je to naslov
            this.prilozi.name = this.food.name;
        });
        this.foodService.getSideDishes().toPromise().then(data => {
            this.prilozi.items  = data.sideDishes;
        })
    }

    convertToInfoObject(){
        Object.keys(this.food).forEach( i => {
            const objekat = {
                key: i,
                value: this.food[i]
            }
            this.infoArray.push(objekat);
        });
    }
}