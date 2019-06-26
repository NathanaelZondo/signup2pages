import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackPage } from './back';
import { DataProvider } from '../../providers/data/data';


@NgModule({
  declarations: [
    BackPage,
  ],
  imports: [
    IonicPageModule.forChild(BackPage),
  ],
})
export class BackPageModule {






}
