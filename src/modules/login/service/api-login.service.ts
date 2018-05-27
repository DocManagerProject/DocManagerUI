import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {LoginCredentials} from "../model/loginCredentials";

const API_URL: string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(
    private http: HttpClient
  ) { }

  public login(credentials: LoginCredentials): void {
    this.http.post(API_URL + "/login", credentials, {observe: 'response'})
      .subscribe(response => alert(response.headers.get("apiToken")));
  }
}
