import { Injectable } from '@angular/core';
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
    return localStorage.getItem("apiToken") != null;
  }

  public login(credentials: LoginCredentials): void {
    this.http.post(API_URL + "/login", credentials, {observe: 'response'})
      .subscribe(this.onSuccess, this.onError);
  }

  onSuccess(response: HttpResponseBase): void {
    localStorage.setItem("apiToken", response.headers.get("apiToken"));
    alert(response.headers.get("apiToken"));
  }

  onError(error: HttpErrorResponse): void {
  }
}
