import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit{

    name: string;
    location: string;
    phoneNumber: string;
    description: string;

    ngOnInit() {
        this.name = localStorage.getItem('name');
        this.location = localStorage.getItem('location');
        this.phoneNumber = localStorage.getItem('phoneNumber');
        this.description = localStorage.getItem('description');
    }
}