
import { Injectable } from "@angular/core";
import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Food } from "../model/food.model";
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders ( {'Content-Type' : 'application/json'})
};

@Injectable()
export class FoodService {
    
    httpOptions = new HttpHeaders({ 'Content-Type' : 'application/json'});
    
    private BASE_URL = 'http://localhost:8090/food';
    
    constructor(private http: HttpClient) {}

    getFood(): Observable<any> {
        return this.http.get('http://localhost:8090/food/getfood');
    }

    getSideDishes(): Observable<any> {
        return this.http.get('http://localhost:8090/sideDish/getSideDishes');
    }


    createNewFood(sdfs, safsa, xxxxxx): Observable<any> {
        const body = JSON.stringify({name: sdfs, price: safsa, description: xxxxxx});
        return this.http.post('http://localhost:8090/food/createFood',body , httpOptions);
    }

    getSingleFood(id: string): Observable<any> {
        return this.http.get(this.BASE_URL + '/getSingleFood/' + id);
    }

}