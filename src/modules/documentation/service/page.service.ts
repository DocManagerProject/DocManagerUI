import {Injectable} from "@angular/core";
import {StorageManager} from "../../app/service/storage-manager.service";
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

  getPage(url: string): Observable<Page> {
    return this.http.get<Page>(
      API_URL + "/pages/solution/" + this.storageManager.getSolutionId() + "/url/" + url, {
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
    }).subscribe();
  }
}
