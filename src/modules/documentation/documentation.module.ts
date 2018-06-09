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
import {PageService} from "./service/pageService";
import {PageEditorComponent} from "./content/page/editor/page-editor.component";
import {FormsModule} from "@angular/forms";
import {EnhancedTextComponent} from "./content/common/text/enhanced-text.component";

const documentationRoutes: Routes = [
  { path: 'page/:url', component: PageComponent, canActivate: [AuthGuard]},
  { path: 'category/:id', component: Category, canActivate: [AuthGuard]},
  { path: 'dashboard/:id', component: Dashboard, canActivate: [AuthGuard]},
  { path: 'create-page', component: PageEditorComponent, canActivate: [AuthGuard]},
  { path: 'edit-page/:url', component: PageEditorComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    DocumentationComponent,
    Navbar,
    PageComponent,
    PageEditorComponent,
    Category,
    Dashboard,
    EnhancedTextComponent
  ],
  imports: [
    RouterModule.forChild(documentationRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    SettingsService,
    PageService
  ],
  bootstrap: [DocumentationComponent]
})
export class DocumentationModule { }
