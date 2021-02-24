import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckinpatientComponent } from "./checkinpatient/checkinpatient.component";
import { InquiryComponent } from "./inquiry/inquiry.component";
import { RegisterpatientComponent } from "./registerpatient/registerpatient.component";
import { SearchpatientComponent } from "./searchpatient/searchpatient.component";

const routes: Routes = [
    {
      path: 'checkin',
      component: CheckinpatientComponent,
    },
    {
      path: 'inquiry',
      component: InquiryComponent,
    },
    {
      path: 'search',
      component: SearchpatientComponent,
    }
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ReceptionistRoutingModule {}