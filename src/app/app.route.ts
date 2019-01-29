import { Route } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const mainRoute: Route[] = [
  { path: "login", component: LoginComponent },
  { path: "home", loadChildren: "./layout/layout.module#LayoutModule" },
  { path: "", redirectTo: "/login", pathMatch: "full" }
];
