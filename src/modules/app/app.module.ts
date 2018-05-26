import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Navbar} from "./navbar/navbar";
import {Page} from "./content/page/page";
import {Category} from "./content/category/category";
import {RouterModule, Routes} from "@angular/router";
import {Dashboard} from "./content/dashboard/dashboard";

const appRoutes: Routes = [
  { path: 'page/:id', component: Page},
  { path: 'category/:id', component: Category},
  { path: 'dashboard/:id', component: Dashboard},
  { path: '', redirectTo: 'dashboard/1', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    Page,
    Category,
    Dashboard
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
