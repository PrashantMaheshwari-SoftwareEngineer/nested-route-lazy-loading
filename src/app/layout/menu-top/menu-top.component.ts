import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu-top",
  templateUrl: "./menu-top.component.html",
  styleUrls: ["./menu-top.component.css"]
})
export class MenuTopComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  onSignOutClick() {
    this._router.navigate(["/login"]);
  }
}
