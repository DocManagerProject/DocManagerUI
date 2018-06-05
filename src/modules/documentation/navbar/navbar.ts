import {Component} from "@angular/core";
import {ApiLoginService} from "../../login/service/apiLoginService";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})

export class Navbar {

  constructor(
    private apiLoginService: ApiLoginService
  ) { }

  logout(): void {
    this.apiLoginService.logout();
  }
}
