import {Injectable} from "@angular/core";
import {Settings} from "./model/settings";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/internal/Observable";
import {StorageManager} from "../app/service/storageManager.service";

const API_URL: string = environment.apiUrl;

@Injectable()
export class SettingsService {

  constructor(
    private http: HttpClient,
    private tokenManager: StorageManager
  ) { }

  getSetting(name: string): Observable<Settings> {
    return this.http.get<Settings>(API_URL + "/settings/solution/2/name/" + name, {
      headers: new HttpHeaders({
        "apiToken": this.tokenManager.getApiToken()
      })
    });
  }
}
