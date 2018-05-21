import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { RestaurantService } from "../../services/restaurantService";

@Component({
    selector: 'app-header',
    templateUrl: './header1.component.html'
})

export class HeaderComponent{

    constructor(
        private router: Router
    ) {}

    onHome() {
        this.router.navigateByUrl('/restaurants');
    }
    //#1
    //DOPUNITI SA ROUTER NAVIGATEBYURL -> NA OSNOVU APP.ROUTING.MODULE.TS SA ODGOVARAJUCIM LINKOVIMA
    onLogin() {
        console.log('test2')
    }

    onRegister() {
        console.log('test3')
    }

    onUsers() {
        console.log('test4');
    }

    goToFood() {
        alert('kliknuo sam')
        this.router.navigateByUrl('food');
    }



}