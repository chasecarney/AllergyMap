import { Component } from '@angular/core';
import { Allergy } from '../../app/allergies';
import { NavController } from 'ionic-angular';
import { RestaurantService } from '../../app/restaurant.service';

@Component({
  selector: 'page-allergies',
  templateUrl: 'allergies.page.html',
	providers: [RestaurantService]
})
export class AllergiesPage {
  constructor(public navCtrl: NavController, private service: RestaurantService) {
		this.service.createList();
  }

  change(allergy: Allergy): void{
    if(allergy.checked){
      allergy.checked = false;
    }
    else{
      allergy.checked = true;
    }
  }



}
