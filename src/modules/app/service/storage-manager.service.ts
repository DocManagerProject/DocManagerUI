import {Injectable} from "@angular/core";

@Injectable()
export class StorageManager {

  getApiToken(): string {
    return this.getStorageEntry("apiToken");
  }

  saveApiToken(apiToken: string, localOrSession: boolean) : void {
    this.saveStorageEntry("apiToken", apiToken, localOrSession);
  }

  clearApiToken(): void {
    this.clearStorageEntry("apiToken");
  }

  getSolutionId(): number {
    return +this.getStorageEntry("solutionId");
  }

  saveSolutionId(solutionId: number, localOrSession: boolean): void {
    this.saveStorageEntry("solutionId", solutionId + "", localOrSession);
  }

  clearSolutionId(): void {
    this.clearStorageEntry("solutionId");
  }


  private saveStorageEntry(key: string, value: string, localOrSession: boolean): void {
    if (localOrSession) {
      sessionStorage.removeItem(key);
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
      sessionStorage.setItem(key, value);
    }
  }

  private getStorageEntry(key: string): string {
    let sessionStorageItem = sessionStorage.getItem(key);

    if (sessionStorageItem === null) {
      return localStorage.getItem(key);
    }
    return sessionStorageItem;
  }

  private clearStorageEntry(key: string): void {
    let sessionStorageItem = sessionStorage.getItem(key);

    if (sessionStorageItem !== null) {
      sessionStorage.removeItem(key);
    }

    let localStorageItem = localStorage.getItem(key);

    if (localStorageItem !== null) {
      localStorage.removeItem(key);
    }
  }
}
