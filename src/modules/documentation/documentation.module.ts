import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DocumentationComponent} from "./documentation.component";
import {Navbar} from "./navbar/navbar";
import {PageComponent} from "./content/page/page.component";
import {Category} from "./content/category/category";
import {RouterModule, Routes} from "@angular/router";
import {Dashboard} from "./content/dashboard/dashboard";
import {AuthGuard} from "../login/service/authGuard";
import {SettingsService} from "./service/settingsService";

const documentationRoutes: Routes = [
  { path: 'page/:id', component: PageComponent, canActivate: [AuthGuard]},
  { path: 'category/:id', component: Category, canActivate: [AuthGuard]},
  { path: 'dashboard/:id', component: Dashboard, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    DocumentationComponent,
    Navbar,
    PageComponent,
    Category,
    Dashboard
  ],
  imports: [
    RouterModule.forChild(documentationRoutes),
    BrowserModule
  ],
  providers: [AuthGuard, SettingsService],
  bootstrap: [DocumentationComponent]
})
export class DocumentationModule { }
