import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Http, Response, Headers } from '@angular/http';
import { APIObject } from './API.object.template';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Alert } from 'ionic-angular';

@Injectable()
export class RestaurantService{
    constructor(private http: Http) { }

    getRestaurant() : Promise<Restaurant[]> {

			var range = 5000;
			var location = '40.7128,-74.0059';

       return this.http.get('http://interapt-employee-web.herokuapp.com/api/v1/employees', {
                headers: header
                })
                .toPromise()
                .then(response => this.parse(response.json()))
                .catch(error => {
                    console.log(error.text);
                    alert("Oops! There was an error.");


                });
    }
