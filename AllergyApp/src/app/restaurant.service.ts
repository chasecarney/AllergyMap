import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { Http, Response, Headers } from '@angular/http';
import { APIObject } from './API.object.template';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Alert } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Location } from './location'
import { Allergy } from './allergies';

@Injectable()
export class RestaurantService{
	current_loc: Location;
	lat: any;
	long: any;
	Allergy_list: Allergy[];
    constructor(private http: Http) { }

    getRestaurant() : Promise<Restaurant[]> {

			var range = 5000;
			var location;
			var latitude, longitude;

		//Geolocation.getCurrentPosition(handle_geolocation_query);

		function handle_geolocation_query(position)
		{
			latitude = (position.coords.latitude);
			longitude = (position.coords.longitude);
			onPositionReady();
		}

		function onPositionReady()
		{
			console.log(latitude,longitude);
		}

		location = latitude + ',' + longitude;
		console.log(latitude);
		
		this.Allergy_list = getList();
		
       return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location+'&radius='+range+'&type=restaurant&keyword=gluten-free&key=AIzaSyB_gzFA02Pt-8KHl63aMbP5vSXFsqR8c-o')
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
		           rest.push(response.results[i]);
		       }
					 console.log(rest);

		        return rest;
		    }

	

		setLocation(loc: Location){
			this.current_loc = loc;
		}
}
