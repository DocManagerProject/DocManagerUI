import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login.component";


const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    LoginComponent
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
