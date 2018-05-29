import {Injectable} from "@angular/core";
import {Settings} from "./model/settings";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/internal/Observable";
import {ApiTokenManager} from "../app/service/apiTokenManager";

const API_URL: string = environment.apiUrl;

@Injectable()
export class SettingsService {

  constructor(
    private http: HttpClient,
    private tokenManager: ApiTokenManager
  ) { }

  getSetting(name: string): Observable<Settings> {
    return this.http.get<Settings>(API_URL + "/settings/solution/2/name/dupa", {
      headers: new HttpHeaders({
        "apiToken": this.tokenManager.getToken()
      })
    });
  }
}
