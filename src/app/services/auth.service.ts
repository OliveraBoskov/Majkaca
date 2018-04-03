import { Injectable } from "@angular/core";
import { HttpHeaders,HttpClient } from "@angular/common/http";
import { User } from "../model/user.model";
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders ( {'Content-Type' : 'application/json'})
};

@Injectable()
export class AuthService{
    httpOptions = new HttpHeaders({ 'Content-Type': 'application/json'});
    private BASE_URL = 'http://localhost:8090/user';

    constructor(private http: HttpClient) {}

    signUp(user: User): Observable<any>{
        const body = JSON.stringify(user);
        
        return this.http.post(this.BASE_URL + '/signUp', body, httpOptions).map(data => data);
    }
    
    logIn(user: User): Observable<any>{
        const body = JSON.stringify(user);

        return this.http.post(this.BASE_URL + '/logIn', body, httpOptions).map(data => data);

    }
}