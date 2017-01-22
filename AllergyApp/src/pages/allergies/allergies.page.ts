import { Component } from '@angular/core';
import { Allergy } from '../../app/allergies';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-allergies',
  templateUrl: 'allergies.page.html'
})
export class AllergiesPage {
  allergy_list: Allergy[] = [];
  constructor(public navCtrl: NavController) {
      this.createList();
  }


  createList(): void{
      this.allergy_list.push(new Allergy("Gluten"));
      this.allergy_list.push(new Allergy("Wheat"));
      this.allergy_list.push(new Allergy("Dairy"));
      this.allergy_list.push(new Allergy("Peanut"));
      this.allergy_list.push(new Allergy("Shellfish"));
      this.allergy_list.push(new Allergy("Tree-Nuts"));
      this.allergy_list.push(new Allergy("Fruit"));

  }

  change(allergy: Allergy): void{
    if(allergy.checked){
      allergy.checked = false;
    }
    else{
      allergy.checked = true;
    }

    console.log(this.allergy_list);
    
    
  }

}
