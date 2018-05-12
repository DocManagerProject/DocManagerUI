import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Navbar} from "./navbar/navbar";
import {Page} from "./content/page/page";
import {Category} from "./content/category/category";

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    Page,
    Category
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
