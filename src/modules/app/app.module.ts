import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './component/app.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginModule} from "../login/login.module";
import {DocumentationModule} from "../documentation/documentation.module";
import {StorageManager} from "./service/storage-manager.service";
import {NotFoundComponent} from "./component/error/not-found.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    LoginModule,
    DocumentationModule
  ],
  providers: [StorageManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
