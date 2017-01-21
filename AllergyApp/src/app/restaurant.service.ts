import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { Http, Response, Headers } from '@angular/http';
import { APIObject } from './API.object.template';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Alert } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Injectable()
export class RestaurantService{
    constructor(private http: Http) { }

    getRestaurant() : Promise<Restaurant[]> {

			var range = 5000;
			var location = '40.7128,-74.0059';

       return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7128,-74.0059&radius=1000&type=restaurant&keyword=gluten-free&key=AIzaSyB_gzFA02Pt-8KHl63aMbP5vSXFsqR8c-o')
                .toPromise()
								.then(response => this.parse(response.json()))
                .catch(error => {
                    console.log(error.text);
                    alert("Oops! There was an error.");
                });
    }

		parse(response: APIObject) : Restaurant[] {

		       var rest: Restaurant[] = [];

		       for(var i = 0; i < response.results.length; i++ ){
						 		console.log(response.results[i].name);
		           rest.push(response.results[i].name);
		       }

		        console.log(rest);
		        return rest;
		    }
}
