import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DocumentationComponent} from "./documentation.component";
import {Navbar} from "./navbar/navbar";
import {PageComponent} from "./content/page/page.component";
import {CategoryComponent} from "./content/category/category.component";
import {RouterModule, Routes} from "@angular/router";
import {Dashboard} from "./content/dashboard/dashboard";
import {AuthGuard} from "../login/service/authGuard";
import {SettingsService} from "./service/settingsService";
import {PageService} from "./service/pageService";
import {EditPageComponent} from "./content/page/edit/edit-page.component";
import {FormsModule} from "@angular/forms";
import {EnhancedTextComponent} from "./content/common/text/enhanced-text.component";
import {CreatePageComponent} from "./content/page/create/create-page.component";
import {NotFoundComponent} from "../app/error/not-found.component";
import {CategoryService} from "./service/category.service";

const documentationRoutes: Routes = [
  { path: 'page/:url', component: PageComponent, canActivate: [AuthGuard]},
  { path: 'category/:url', component: CategoryComponent, canActivate: [AuthGuard]},
  { path: 'dashboard/:id', component: Dashboard, canActivate: [AuthGuard]},
  { path: 'create-page', component: CreatePageComponent, canActivate: [AuthGuard]},
  { path: 'edit-page/:url', component: EditPageComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    DocumentationComponent,
    Navbar,
    PageComponent,
    CreatePageComponent,
    EditPageComponent,
    CategoryComponent,
    Dashboard,
    EnhancedTextComponent
  ],
  imports: [
    RouterModule.forChild(documentationRoutes),
    BrowserModule,
    FormsModule
  ],
  exports: [
    Navbar
  ],
  providers: [
    AuthGuard,
    SettingsService,
    PageService,
    CategoryService
  ],
  bootstrap: [DocumentationComponent]
})
export class DocumentationModule { }
