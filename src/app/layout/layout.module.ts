import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { MenuTopComponent } from "./menu-top/menu-top.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeeComponent } from "./employee/employee.component";
import { RouterModule } from "@angular/router";
import { layoutRoute } from "./layout.route";
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(layoutRoute)],
  declarations: [
    LayoutComponent,
    MenuTopComponent,
    DashboardComponent,
    EmployeeComponent,
    CustomerComponent
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {}
