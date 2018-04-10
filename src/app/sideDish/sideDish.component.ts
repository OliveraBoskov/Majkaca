import { Component, OnInit } from "@angular/core";
import { FoodService } from "../services/foodService";

@Component({
    selector: 'app-sideDish',
    templateUrl: './sideDish.component.html'

})

export class SideDishComponent implements OnInit{

    
    nizSideDish = []
    constructor(private foodService : FoodService){}


    ngOnInit(): void {
       this.foodService.getSideDishes().subscribe(data=>{
           console.log(data);
           this.nizSideDish = data.sideDishes;

       })
    }
    
}


