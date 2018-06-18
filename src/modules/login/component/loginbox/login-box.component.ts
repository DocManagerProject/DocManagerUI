import {Component} from "@angular/core";
import {LoginCredentials} from "../../model/login-credentials";
import {ApiLoginService} from "../../service/api-login.service";

@Component({
  selector: 'login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent {
  loginCredentials: LoginCredentials = new LoginCredentials("", "");

  isValid: boolean = true;
  remember: boolean = localStorage.getItem("apiToken") != null;
  errorMessage: string = "";

  constructor(private loginService: ApiLoginService) { }

  displayError(errorMessage: string) : void {
    this.errorMessage = errorMessage;
  }

  validateCredentials() : void {
    if (this.loginCredentials.email.length < 1) {
      this.isValid = false;
      this.displayError("E-mail cannot be empty");
      return;
    }

    if (this.loginCredentials.password.length < 1) {
      this.isValid = false;
      this.displayError("Password cannot be empty");
      return;
    }

    this.isValid = true;
  }

  onSubmit() : void {
    this.validateCredentials();

    if (this.isValid) {
      this.loginService.login(this.loginCredentials, this.remember);
    }
  }
}
