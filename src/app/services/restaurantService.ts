import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Restaurant } from "../model/restaurant.model";
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders ( { 'ContentType' : 'application/json' })
};

@Injectable()
export class RestaurantService{

    httpOptions = new HttpHeaders({ 'Content-Type': 'application/json'});

    private BASE_URL = 'http://localhost:8090/restaurant';
    constructor(private http: HttpClient){}

    getRestaurants(): Observable<any> {
        return this.http.get(this.BASE_URL + '/getRestaurants')
    }

    getSingleRestaurant(id: string): Observable<any> {
        return this.http.get(this.BASE_URL + '/getSingleRestaurant/' + id);
    }

    
 
}