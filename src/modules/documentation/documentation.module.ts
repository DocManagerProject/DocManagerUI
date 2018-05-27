import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DocumentationComponent} from "./documentation.component";
import {Navbar} from "./navbar/navbar";
import {Page} from "./content/page/page";
import {Category} from "./content/category/category";
import {RouterModule, Routes} from "@angular/router";
import {Dashboard} from "./content/dashboard/dashboard";
import {AuthGuard} from "../login/service/authGuard";

const documentationRoutes: Routes = [
  { path: 'page/:id', component: Page, canActivate: [AuthGuard]},
  { path: 'category/:id', component: Category, canActivate: [AuthGuard]},
  { path: 'dashboard/:id', component: Dashboard, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    DocumentationComponent,
    Navbar,
    Page,
    Category,
    Dashboard
  ],
  imports: [
    RouterModule.forChild(documentationRoutes),
    BrowserModule
  ],
  providers: [AuthGuard],
  bootstrap: [DocumentationComponent]
})
export class DocumentationModule { }
