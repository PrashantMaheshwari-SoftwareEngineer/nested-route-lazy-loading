import { Route } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LayoutComponent } from "./layout.component";
import { CustomerComponent } from './customer/customer.component';

export const layoutRoute: Route[] = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "employee",
        component: EmployeeComponent
      },
      {
        path: "customer",
        component: CustomerComponent
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  }
];
