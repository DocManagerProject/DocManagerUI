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

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(API_URL + "/categories", category, {
      headers:  new HttpHeaders({
        "apiToken": this.storageManager.getApiToken()
      })
    });
  }

  editCategory(category: Category, existingCategory: Category): Observable<Category> {
    let updateObject = {};

    if (category.name !== existingCategory.name) {
      updateObject["name"] = category.name;
    }

    if (category.url !== existingCategory.url) {
      updateObject["url"] = category.url;
    }
    return this.http.patch<Category>(API_URL + "/categories/solution/" + existingCategory.solution.id + "/url/" + existingCategory.url, updateObject, {
      headers:  new HttpHeaders({
        "apiToken": this.storageManager.getApiToken()
      })
    });
  }
}
