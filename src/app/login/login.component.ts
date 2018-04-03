import {Component} from "@angular/core";
import { FormGroup, AbstractControl, FormBuilder,Validators } from "@angular/forms";
import { User } from "../model/user.model";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LogInComponent{

    public form: FormGroup;
    public username: AbstractControl;
    public password: AbstractControl;

    constructor(private fb: FormBuilder, 
                private authService: AuthService,
                private router: Router,
                private toastrService: ToastrService){
        this.form = this.fb.group({
        'username': ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
        'password': ['', Validators.compose([Validators.required, Validators.maxLength(10)])]
    });
    this.username = this.form.controls['username'];
    this.password = this.form.controls['password']; 

    }

    onLogin(): void {
      
        const user = new User(this.username.value, this.password.value);
        this.authService.logIn(user).subscribe(data => {
            if(data.message == "Korisnik ne postoji"){
                this.toastrService.error(data.message,'Greska')
                this.form.reset();
            }else if(data.message == "Neispravna lozinka")
            {
                this.toastrService.error(data.message,'Greska')
                this.form.reset();
            }else if(data.message == "Niste aktivirali nalog") {
                this.toastrService.error(data.message,'Greska')
            }else {
            this.toastrService.success("Pozdrav",data.message)
            localStorage.setItem('role',data.user.role);
            localStorage.setItem('username',data.user.username);
            this.router.navigateByUrl('home');
            this.form.reset();
            }
        });
    };
}