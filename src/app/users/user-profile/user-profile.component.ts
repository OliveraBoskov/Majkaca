import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html'
})

export class UserProfileComponent implements OnInit{

    user: any;
    infoArray = [];

    //polje koje saljem
    poljeKojeSaljem = "okej";

    constructor(
        private route: ActivatedRoute,
        private authService: AuthService
    ){}

    ngOnInit() {
        const email = this.route.snapshot.params.email;
        this.authService.getSingleUser(email).toPromise()
        .then(data => {
            console.log(data);
            this.user= data;
            this.convertToInfoObject();
            console.log(this.infoArray)
        })
    }

    convertToInfoObject() {
        Object.keys(this.user).forEach( i => {
            console.log(i);
            console.log(this.user[i]);
            const objekat = {
                key: i,
                value: this.user[i]
            }
            this.infoArray.push(objekat);
        });
    }
    
}