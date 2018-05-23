import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html'
})

export class UserProfileComponent implements OnInit{

    user: any;

    constructor(
        private route: ActivatedRoute,
        private userService: AuthService
    ){}

    ngOnInit() {
        const email = this.route.snapshot.params.email;
        this.userService.getSingleUser(email).toPromise()
        .then(data => {
            console.log(data);
            this.user= data;
        })
    }
    
}