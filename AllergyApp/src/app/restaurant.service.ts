import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { Http, Response, Headers } from '@angular/http';
import { APIObject } from './API.object.template';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Alert } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Allergy } from './allergies';

@Injectable()
export class RestaurantService{

		public allergy_list: Allergy[] = [];

    constructor(private http: Http) {
			console.log(this.allergy_list);
		}

    getRestaurant() : Promise<Restaurant[]> {

			var range = 75000;
			var location = '40.7128,-74.0059';
			var keys = 'free';

			for(var i = 0; i < this.allergy_list.length; i++)
			{
				console.log(this.allergy_list[i].name + ' ' + this.allergy_list[i].checked)
				if(this.allergy_list[i].checked == true)
				{
					switch(this.allergy_list[i].name)
					{
						case 'Gluten':
							keys = 'gluten-' + keys;
							break;
						case 'Wheat':
							keys = 'wheat-' + keys;
							break;
						case 'Dairy':
							keys = 'dairy-' + keys;
							break;
						case 'Peanut':
							keys = 'peanut-' + keys;
							break;
						case 'Shellfish':
							keys = 'shellfish-' + keys;;
							break;
						case 'Tree-Nuts':
							keys = 'tree-nuts-' + keys;
							break;
						case 'Fruit':
							keys = 'fruit-' + keys;
							break;
					}
				}
			}

       return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location+'&radius='+range+'&type=restaurant&keyword='+keys+'&key=AIzaSyB_gzFA02Pt-8KHl63aMbP5vSXFsqR8c-o')
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

		createList(): void{
				this.allergy_list = [];
			    this.allergy_list.push(new Allergy("Gluten"));
			    this.allergy_list.push(new Allergy("Wheat"));
			    this.allergy_list.push(new Allergy("Dairy"));
			    this.allergy_list.push(new Allergy("Peanut"));
			    this.allergy_list.push(new Allergy("Shellfish"));
			    this.allergy_list.push(new Allergy("Tree-Nuts"));
			    this.allergy_list.push(new Allergy("Fruit"));
			}
}
