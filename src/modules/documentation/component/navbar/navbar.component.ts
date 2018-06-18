import {Component} from "@angular/core";
import {ApiLoginService} from "../../../login/service/api-login.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(
    private apiLoginService: ApiLoginService
  ) { }

  logout(): void {
    this.apiLoginService.logout();
  }
}
