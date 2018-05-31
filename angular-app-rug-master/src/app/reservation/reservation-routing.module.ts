import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ReservationEventComponent} from './reservation-event/reservation-event.component'
import { UsertableComponent } from "./usertable/usertable.component";

export const ReservationModule: Routes = [
  { path: 'month', component: ReservationEventComponent, }


]
@NgModule({
  imports: [
    RouterModule.forChild(ReservationModule)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationRoutingModule {}