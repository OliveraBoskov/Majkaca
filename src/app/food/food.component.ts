import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html'
})
export class FoodComponent implements OnInit{

    name: string;
    price: number;

    ngOnInit() {
       // this.name = localStorage.getItem('name');
        // this.price = localStorage.getItem('price');
    }
}