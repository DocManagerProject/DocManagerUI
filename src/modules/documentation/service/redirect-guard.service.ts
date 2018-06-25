import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {SettingsService} from "./settings.service";

@Injectable()
export class RedirectGuardService implements CanActivate {

  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) { }

  canActivate(): boolean {
    this.settingsService.getSetting("main_page").subscribe(setting => {
      this.router.navigate(["page/" + setting.value]);
    });
    return false;
  }
}
