import { Router } from "@angular/router";
import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    constructor(private router: Router){}


    goToFood() {
        alert('kliknuo sam')
        this.router.navigateByUrl('food');
    }

}