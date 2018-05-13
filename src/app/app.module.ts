import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Navbar} from "./navbar/navbar";
import {Page} from "./content/page/page";
import {Category} from "./content/category/category";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: 'page/:id', component: Page},
  { path: 'category/:id', component: Category}
];

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    Page,
    Category
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
