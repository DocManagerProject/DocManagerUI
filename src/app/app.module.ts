import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Navbar} from "./navbar/navbar";
import {Page} from "./page/page";

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    Page
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
