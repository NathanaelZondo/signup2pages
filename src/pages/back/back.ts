import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ExitPage } from '../exit/exit';
/**
 * Generated class for the BackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-back',
  templateUrl: 'back.html',
})
export class BackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private dt2:DataProvider) {
  }
name= this.dt2.nn1;
surname = this.dt2.nn2;
warning;
name1 = "Nathanael";
name2 = "Zondo";
message =this.dt2.message;

 

}
