import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

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

    constructor(private authService: AuthService) {}

    ngOnInit() {
       
      this.authService.getUsers().subscribe( data => {
          console.log(data);
          this.nizUsera = data.users;
      })
    }

}