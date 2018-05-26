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
    prilozi: any;
    priloziItems = [];

    //sredjujemo
    sideDish = [];


    constructor(
        private route: ActivatedRoute,
        private foodService: FoodService
    ){}

    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.foodService.getSingleFood(id).toPromise()
        .then(data => {
            console.log(data);
            this.food = data;
            this.convertToInfoObject();
        });
        this.foodService.getSideDishes().toPromise().then(data => {
            console.log(data);
            // this.sideDish = data.sideDish;
            console.log(this.sideDish);
            // this.createListOfSideDishes();
            console.log(this.priloziItems);
            // this.createPriloziInfoArray();
            console.log(this.priloziItems);
        })
    }

    convertToInfoObject(){
        Object.keys(this.food).forEach( i => {
            console.log(i);
            console.log(this.food[i]);
            const objekat = {
                key: i,
                value: this.food[i]
            }
            this.infoArray.push(objekat);
        });
    }

    // createListOfSideDishes(){
    //     this.prilozi.forEach ( this.prilozi => {
    
    //     })
    // }

}