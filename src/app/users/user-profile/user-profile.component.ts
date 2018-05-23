import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from '../../services/userService';


@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html'
})

export class UserProfileComponent implements OnInit{

    user: any;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
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