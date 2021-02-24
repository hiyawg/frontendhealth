import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionistsRoutingModule } from './receptionists-routing.module';
import { AssignComponent } from './assign/assign.component';


@NgModule({
  declarations: [AssignComponent],
  imports: [
    CommonModule,
    ReceptionistsRoutingModule
  ]
})
export class ReceptionistsModule { }
