import { Component } from '@angular/core';

import { RestaurantsPage } from '../restaurants/restaurants.page';
import { AllergiesPage } from '../allergies/allergies.page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RestaurantsPage;
  tab2Root: any = AllergiesPage;

  constructor() {

  }
}
