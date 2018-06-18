import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";
import {StorageManager} from "../../app/service/storage-manager.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Category} from "../model/category";
import {CategoryItem} from "../model/category-item";

const API_URL: string = environment.apiUrl;

@Injectable()
export class CategoryService {
  constructor(
    private http: HttpClient,
    private storageManager: StorageManager
  ) { }

  getCategory(url: string): Observable<Category> {
    return this.http.get<Category>(
      API_URL + "/categories/solution/" + this.storageManager.getSolutionId() + "/url/" + url, {
        headers: new HttpHeaders({
          "apiToken": this.storageManager.getApiToken()
        })
      });
  }

  getCategoryItems(categoryId: number): Observable<CategoryItem[]> {
    return this.http.get<CategoryItem[]>(
      API_URL + "/category_items/category/" + categoryId, {
        headers: new HttpHeaders({
          "apiToken": this.storageManager.getApiToken()
        })
      });
  }

  addCategory(category: Category): void {
    this.http.post<Category>(API_URL + "/categories", category, {
      headers:  new HttpHeaders({
        "apiToken": this.storageManager.getApiToken()
      })
    }).subscribe();
  }
}
