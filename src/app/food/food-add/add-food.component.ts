import { Component, OnInit } from "@angular/core";
import { FoodService } from '../../services/foodService';
import { Food } from "../../model/food.model";

@Component({
    selector: 'app-add-food',
    templateUrl: './add-food.component.html'
})
export class AddFoodComponent implements OnInit{

    food: Food = new Food('',null,'','');
    sideDishes = [];

    checkiraniPrilizo =  [];

    constructor(
        private foodService: FoodService,
    ) {}

    ngOnInit() {
        this.foodService.getSideDishes().toPromise().then(data => {
            this.sideDishes = data.sideDishes;
        })
    }

    onSave() {
        console.log(this.food);
        this.foodService.createFood(this.food, this.checkiraniPrilizo).toPromise().then(data => {
            console.log(data);
        })
    }

    onCheck(item) {
        console.log('check' + item);
        if(this.checkiraniPrilizo.some(element => element == item.id)) {
            const index = this.checkiraniPrilizo.indexOf(item.id);
            this.checkiraniPrilizo.splice(index ,1);
        } else {
            this.checkiraniPrilizo.push(item.id);
        }
    }

}