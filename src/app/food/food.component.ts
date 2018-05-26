import { Component, OnInit } from "@angular/core";
import { FoodService } from "../services/foodService";
import { Router } from "@angular/router";

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html'
})
export class FoodComponent implements OnInit{

    name: string;
    price: number;
    nizFood = []
    nizSalata = []
    nizPredjela = []
    nizGlavnih = []

    nemanjaVariable: any

    constructor(private foodService: FoodService,
                private router: Router
            ) {}

    ngOnInit() {

      this.foodService.getFood().subscribe( data => {
          this.nizFood = data.food;
      })
    }

    onFood(food) {
        const id = food.id;
        this.router.navigateByUrl('/food/' + id);
    }

    onAddFood() {
        this.router.navigateByUrl('/food/add');
    }
}