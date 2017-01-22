import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Splashscreen } from 'ionic-native';
import { StatusBar } from 'ionic-native';
import { AllergiesPage } from '../pages/allergies/allergies';
import { RestaurantsPage } from '../pages/restaurants/restaurants.page';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html',
	providers: [RestaurantService]
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
			StatusBar.styleLightContent();
      Splashscreen.hide();
    });
  }
}
