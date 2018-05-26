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
          console.log(data);
          this.nizFood = data.food;
        //   this.nizSalata = data.food.filter(item => item.typeF == 'salata')
        //   this.nizPredjela = data.food.filter(item => item.typeF == 'predjelo')
        //   this.nizGlavnih = data.food.filter(item => item.typeF == 'glavo')
        //   console.log(this.nizSalata)

        //   this.nemanjaVariable = data.message;
      })
    }

    // checkNiz() {
    //     if(this.nizPredjela.length  === 0) return false;
    //     return true;
    // }

    onFood(food) {
        console.log('pritisnuo ' + food.id);
        const id = food.id;
        this.router.navigateByUrl('/food/' + id);
    }
}