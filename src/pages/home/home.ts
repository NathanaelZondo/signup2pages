import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import {BackPage} from '../back/back';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( public navCtrl: NavController ,private dt1:DataProvider) {

  }
 
  sho:any = {};
  person =[];
  name1;
  surname;
  save(i = this.sho)
  {
   this.person.push(this.sho);
   this.sho ={}; 
   this.dt1.nn1= this.person[0].name;
   this.dt1.nn2 = this.person[0].surname;

this.person.splice(0,1);
   this.name1 = this.dt1.nn1;
   this.surname = this.dt1.nn2;
   
   this.navCtrl.push(BackPage);
  }


}
