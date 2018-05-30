import {Injectable} from "@angular/core";
import {ApiLoginService} from "./apiLoginService";
import {CanActivate, Router} from "@angular/router";
import {SettingsService} from "../../documentation/service/settingsService";

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(
    private apiLoginService: ApiLoginService,
    private router: Router,
    private settingsService: SettingsService
  ) { }

  canActivate(): boolean {
    if (this.apiLoginService.isLoggedIn()) {
      this.settingsService.getSetting("start_page").subscribe(startPageSetting => {
        let startPageId: number = +startPageSetting.value;
        this.router.navigate(["page/" + startPageId]);
      });
      return false;
    }
    return true;
  }
}
