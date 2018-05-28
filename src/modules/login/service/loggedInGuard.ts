import {Injectable} from "@angular/core";
import {ApiLoginService} from "./api-login.service";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(
    private apiLoginService: ApiLoginService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.apiLoginService.isLoggedIn()) {
      this.router.navigate(["dashboard/1"]);
      return false;
    }
    return true;
  }
}
