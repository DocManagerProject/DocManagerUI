import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpResponseBase} from "@angular/common/http";
import {LoginCredentials} from "../model/loginCredentials";
import {Router} from "@angular/router";

const API_URL: string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public isLoggedIn(): boolean {
    return localStorage.getItem("apiToken") != null || sessionStorage.getItem("apiToken") != null;
  }

  public login(credentials: LoginCredentials, remember: boolean): void {
    if (this.isLoggedIn()) {
      return;
    }
    this.http.post(API_URL + "/login", credentials, {observe: 'response'})
      .subscribe(response => this.onSuccess(response, remember), this.onError);
  }

  private onSuccess(response: HttpResponseBase, remember: boolean): void {
    if (remember) {
      localStorage.setItem("apiToken", response.headers.get("apiToken"));
    } else {
      localStorage.removeItem("apiToken");
      sessionStorage.setItem("apiToken", response.headers.get("apiToken"));
    }
    this.router.navigate(["dashboard/1"]);
  }

  private onError(error: HttpErrorResponse): void {
  }
}
