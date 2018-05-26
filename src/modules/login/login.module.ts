import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login.component";
import {LoginPage} from "./content/loginpage/loginPage";
import {LoginBox} from "./content/loginbox/loginBox";


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule {

}
