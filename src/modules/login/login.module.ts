import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login.component";
import {LoginPage} from "./content/loginpage/loginPage";
import {LoginBox} from "./content/loginbox/loginBox";
import {FormsModule} from "@angular/forms";
import {ApiLoginService} from "./service/api-login.service";
import {HttpClientModule} from "@angular/common/http";


const appRoutes: Routes = [
  { path: 'login', component: LoginPage },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    LoginComponent,
    LoginPage,
    LoginBox
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiLoginService
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule {

}
