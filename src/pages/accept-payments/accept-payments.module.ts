import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptPaymentsPage } from './accept-payments';

@NgModule({
  declarations: [
    AcceptPaymentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptPaymentsPage),
  ],
})
export class AcceptPaymentsPageModule {}
