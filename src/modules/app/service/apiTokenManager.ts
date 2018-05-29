import {Injectable} from "@angular/core";

@Injectable()
export class ApiTokenManager {

  getToken(): string {
    let sessionStorageItem = sessionStorage.getItem("apiToken");

    if (sessionStorageItem === null) {
      return localStorage.getItem("apiToken");
    }
    return sessionStorageItem;
  }

  saveToken(apiToken: string, localOrSession: boolean) : void {
    if (localOrSession) {
      sessionStorage.removeItem("apiToken");
      localStorage.setItem("apiToken", apiToken);
    } else {
      localStorage.removeItem("apiToken");
      sessionStorage.setItem("apiToken", apiToken);
    }
  }
}
