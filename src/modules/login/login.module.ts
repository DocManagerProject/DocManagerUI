import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./component/login.component";
import {LoginPageComponent} from "./component/loginpage/login-page.component";
import {LoginBoxComponent} from "./component/loginbox/login-box.component";
import {FormsModule} from "@angular/forms";
import {ApiLoginService} from "./service/api-login.service";
import {HttpClientModule} from "@angular/common/http";
import {LoggedInGuardService} from "./service/logged-in-guard.service";


const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [LoggedInGuardService]}
];

@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent,
    LoginBoxComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiLoginService,
    LoggedInGuardService
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule {

}
