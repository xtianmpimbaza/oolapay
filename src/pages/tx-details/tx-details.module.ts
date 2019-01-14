import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TxDetailsPage } from './tx-details';

@NgModule({
  declarations: [
    TxDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TxDetailsPage),
  ],
})
export class TxDetailsPageModule {}
