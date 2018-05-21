import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit{

    username: string;
    password: string;
    email: string;
    active: boolean;
    activationLink: string;
    role: string;
    nizUsera = [];

    constructor(private authService: AuthService,
    private router: Router) {}

    ngOnInit() {
       
      this.authService.getUsers().subscribe( data => {
          console.log(data);
          this.nizUsera = data.users;
      })
    }

    onUsers(user){

        console.log('pritisnuo' + user.email);
        const email = user.email;
        this.router.navigateByUrl('/users/' + email);

    }

}