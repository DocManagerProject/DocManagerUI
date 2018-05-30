import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpResponseBase} from "@angular/common/http";
import {LoginCredentials} from "../model/loginCredentials";
import {Router} from "@angular/router";
import {StorageManager} from "../../app/service/storageManager.service";

const API_URL: string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenManager: StorageManager
  ) { }

  public isLoggedIn(): boolean {
    return this.tokenManager.getApiToken() !== null;
  }

  public login(credentials: LoginCredentials, remember: boolean): void {
    if (this.isLoggedIn()) {
      return;
    }
    this.http.post(API_URL + "/login", credentials, {observe: 'response'})
      .subscribe(response => this.onSuccess(response, remember), this.onError);
  }

  private onSuccess(response: HttpResponseBase, remember: boolean): void {
    this.tokenManager.saveApiToken(response.headers.get("apiToken"), remember);
    this.router.navigate(["dashboard/1"]);
  }

  private onError(error: HttpErrorResponse): void {
  }
}
