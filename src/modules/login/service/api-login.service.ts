import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpResponseBase} from "@angular/common/http";
import {LoginCredentials} from "../model/loginCredentials";

const API_URL: string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(
    private http: HttpClient
  ) { }

  public isLoggedIn(): boolean {
    return localStorage.getItem("apiToken") != null || sessionStorage.getItem("apiToken") != null;
  }

  public login(credentials: LoginCredentials, remember: boolean): void {
    this.http.post(API_URL + "/login", credentials, {observe: 'response'})
      .subscribe(response => this.onSuccess(response, remember), this.onError);
  }

  private onSuccess(response: HttpResponseBase, remember: boolean): void {
    if (remember) {
      localStorage.setItem("apiToken", response.headers.get("apiToken"));
      return;
    }
    localStorage.removeItem("apiToken");
    sessionStorage.setItem("apiToken", response.headers.get("apiToken"));
  }

  private onError(error: HttpErrorResponse): void {
  }
}
