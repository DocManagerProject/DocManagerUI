import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DocumentationComponent} from "./documentation.component";
import {Navbar} from "./navbar/navbar";
import {Page} from "./content/page/page";
import {Category} from "./content/category/category";
import {RouterModule, Routes} from "@angular/router";
import {Dashboard} from "./content/dashboard/dashboard";

const documentationRoutes: Routes = [
  { path: 'page/:id', component: Page},
  { path: 'category/:id', component: Category},
  { path: 'dashboard/:id', component: Dashboard}
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
  providers: [],
  bootstrap: [DocumentationComponent],
  exports: [DocumentationComponent]
})
export class DocumentationModule { }
