import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { RestaurantService } from "../../services/restaurantService";

@Component({
    selector: 'app-header',
    templateUrl: './header1.component.html'
})

export class HeaderComponent{

    constructor(private router: Router)
        {}

    onHome() {
        console.log('test')
        this.router.navigateByUrl('/restaurants');
    }

    goToFood() {
        alert('kliknuo sam')
        this.router.navigateByUrl('food');
    }



}