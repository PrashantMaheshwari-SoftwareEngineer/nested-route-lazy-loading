import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { mainRoute } from "./app.route";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, RouterModule.forRoot(mainRoute)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
