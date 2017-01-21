import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AllergiesPage } from '../pages/allergies/allergies';
import { RestaurantsPage } from '../pages/restaurants/restaurants.page';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AllergiesPage,
    RestaurantsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AllergiesPage,
  	RestaurantsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
