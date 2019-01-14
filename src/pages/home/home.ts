import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  // goToMyPage(page: string) {
  //   this.navCtrl.push(page);
  // }
   goToMyPage() {
    this.navCtrl.push('TxDetailsPage');
  }

}
