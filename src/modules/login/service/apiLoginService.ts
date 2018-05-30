import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpResponseBase} from "@angular/common/http";
import {LoginCredentials} from "../model/loginCredentials";
import {Router} from "@angular/router";
import {StorageManager} from "../../app/service/storageManager.service";
import {SettingsService} from "../../documentation/service/settingsService";

const API_URL: string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageManager: StorageManager,
    private settingsService: SettingsService
  ) { }

  public isLoggedIn(): boolean {
    return this.storageManager.getApiToken() !== null;
  }

  public login(credentials: LoginCredentials, remember: boolean): void {
    if (this.isLoggedIn()) {
      return;
    }
    this.http.post(API_URL + "/login", credentials, {observe: 'response'})
      .subscribe(response => this.onSuccess(response, remember), this.onError);
  }

  private onSuccess(response: HttpResponseBase, remember: boolean): void {
    this.storageManager.saveApiToken(response.headers.get("apiToken"), remember);
    this.storageManager.saveSolutionId(+response.headers.get("solutionId"), remember);
    this.settingsService.getSetting("start_page").subscribe(startPageSetting => {
      let startPageId: number = +startPageSetting.value;
      this.router.navigate(["page/" + startPageId]);
    });
  }

  private onError(error: HttpErrorResponse): void {
  }
}
