import {Injectable} from "@angular/core";
import {StorageManager} from "../../app/service/storageManager.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {environment} from "../../../environments/environment";
import {Page} from "../model/page";

const API_URL: string = environment.apiUrl;

@Injectable()
export class PageService {
  constructor(
    private http: HttpClient,
    private storageManager: StorageManager
  ) { }

  getPage(id: number): Observable<Page> {
    return this.http.get<Page>(API_URL + "/pages/" + id, {
      headers: new HttpHeaders({
        "apiToken": this.storageManager.getApiToken()
      })
    });
  }

  addPage(page: Page): void {
    this.http.post<Page>(API_URL + "/pages", page, {
      headers:  new HttpHeaders({
        "apiToken": this.storageManager.getApiToken()
      })
    });
  }
}
