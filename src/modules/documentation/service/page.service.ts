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

  addPage(page: Page): Observable<Page> {
    return this.http.post<Page>(API_URL + "/pages", page, {
      headers:  new HttpHeaders({
        "apiToken": this.storageManager.getApiToken()
      })
    });
  }

  editPage(page: Page, existingPage: Page): Observable<Page> {
    let updateObject = {};

    if (page.name !== existingPage.name) {
      updateObject["name"] = page.name;
    }

    if (page.content !== existingPage.content) {
      updateObject["content"] = page.content;
    }

    if (page.url !== existingPage.url) {
      updateObject["url"] = page.url;
    }
    return this.http.patch<Page>(API_URL + "/pages/solution/" + existingPage.solution.id + "/url/" + existingPage.url, updateObject, {
      headers:  new HttpHeaders({
        "apiToken": this.storageManager.getApiToken()
      })
    });
  }
}
