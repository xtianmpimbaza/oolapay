import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToMyPage(page: string) {
    this.navCtrl.push(page);
  }

  signIn() {
    // this.navCtrl.push('TabsPage');
    this.navCtrl.setRoot(TabsPage);
  }

}
