import { Component, OnInit } from "@angular/core";
import { FoodService } from "../services/foodService";

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html'
})
export class FoodComponent implements OnInit{

    name: string;
    price: number;
    nizSalata = []
    nizPredjela = []
    nizGlavnih = []

    nemanjaVariable: any
    constructor(private foodService: FoodService) {}

    ngOnInit() {
       

    constructor(private foodService: FoodService) {}

    ngOnInit() {

      this.foodService.getFood().subscribe( data => {
          console.log(data);
          this.nizSalata = data.food.filter(item => item.typeF == 'salata')
          this.nizPredjela = data.food.filter(item => item.typeF == 'predjelo')
          this.nizGlavnih = data.food.filter(item => item.typeF == 'glavo')
          console.log(this.nizSalata)

        this.nemanjaVariable = data.message;
      })
    }

    checkNiz() {
        if(this.nizPredjela.length  === 0) return false;
        return true;
      })
    }
}