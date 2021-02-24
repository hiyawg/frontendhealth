import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignComponent } from './assign/assign.component';

const routes: Routes = [
  {
    path: 'assign',
    component: AssignComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistsRoutingModule { }
