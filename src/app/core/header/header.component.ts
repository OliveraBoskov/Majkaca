import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { RestaurantService } from "../../services/restaurantService";

@Component({
    selector: 'app-header',
    styleUrls: ['./header.component.css'],
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
        this.router.navigateByUrl('/login');
    }

    onRegister() {
        this.router.navigateByUrl('register');
    }

    onUsers() {
        this.router.navigateByUrl('/users')

    }

    goToFood() {
        alert('kliknuo sam')
        this.router.navigateByUrl('food');
    }



}