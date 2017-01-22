import { Component } from '@angular/core';
import { Restaurant } from '../../app/restaurant'
import { RestaurantService } from '../../app/restaurant.service'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.page.html',
	providers: [RestaurantService]
})
export class RestaurantsPage {
	public rest: Restaurant[];
  constructor(public navCtrl: NavController, private service: RestaurantService) {

				 this.service.getRestaurant()
         .then(rest=>{
           this.rest = rest;
         });

				 console.log(rest.rating);

  }



}
