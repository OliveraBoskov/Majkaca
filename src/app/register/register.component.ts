import {Component} from "@angular/core";
import { AuthService } from "../services/auth.service";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { User } from "../model/user.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent{

    public form: FormGroup;
    public username: AbstractControl;
    public password: AbstractControl;
    public email: AbstractControl;

    constructor(private fb: FormBuilder, private authService: AuthService,private router: Router){
        this.form = this.fb.group({
        'username': ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
        'password': ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
        'email': ['', Validators.compose([Validators.required, Validators.maxLength(15)])]
    });
    this.username = this.form.controls['username'];
    this.password = this.form.controls['password']; 
    this.email = this.form.controls['email'];
    }

    ngOnInit(){

    }

    signUp(){
        const user = new User(this.username.value,this.password.value,this.email.value);
        this.authService.signUp(user).subscribe(data => {
            this.router.navigateByUrl('login');
            this.form.reset();
        });
    };

}