import { Component, OnInit } from "@angular/core";
import { FoodService } from "../../services/foodService";
import { FormGroup, AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-newFood',
    templateUrl: './newFood.component.html'
})
export class NewFoodComponent implements OnInit{

    public form: FormGroup;
    // public foodType: AbstractControl;
    public name: AbstractControl;
    // public restaurant: AbstractControl;
    // public foodAvailable: AbstractControl;
    public price: AbstractControl;
    public description: AbstractControl;


    constructor (private fb: FormBuilder, private foodService: FoodService, private router: Router) {
        this.form = this.fb.group({
            // 'foodType': ['', Validators.compose([Validators.required])],
            'name': ['', Validators.compose([Validators.required])],
            // 'restaurant': ['', Validators.compose([Validators.required])],
            // 'foodAvailable': ['', Validators.compose([Validators.required])]
            'price': ['', Validators.compose([Validators.required])],
            'description': ['', Validators.compose([Validators.required])]
        });

        // this.foodType = this.form.controls['foodType'];
        this.name = this.form.controls['name'];
        // this.restaurant = this.form.controls['restaurant'];
        // this.foodAvailable = this.form.controls['foodAvailable'];
        this.price = this.form.controls['price'];
        this.description = this.form.controls['description'];
    }

    test(){
        alert('food name:' + this.name.value);
        // this.foodService.createNewFood(this.name.value, this.price.value, this.description.value).subscribe(data => {
        //     console.log(data);
        // });
    }


    ngOnInit() {
        
       
    }
}