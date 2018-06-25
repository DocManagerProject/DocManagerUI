import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DocumentationComponent} from "./component/documentation.component";
import {NavbarComponent} from "./component/navbar/navbar.component";
import {PageComponent} from "./component/page/show/page.component";
import {CategoryComponent} from "./component/category/show/category.component";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./component/dashboard/show/dashboard.component";
import {AuthGuardService} from "../login/service/auth-guard.service";
import {SettingsService} from "./service/settings.service";
import {PageService} from "./service/page.service";
import {EditPageComponent} from "./component/page/edit/edit-page.component";
import {FormsModule} from "@angular/forms";
import {EnhancedTextComponent} from "./component/common/enchancedtext/enhanced-text.component";
import {CreatePageComponent} from "./component/page/create/create-page.component";
import {NotFoundComponent} from "../app/component/error/not-found.component";
import {CategoryService} from "./service/category.service";
import {EditCategoryComponent} from "./component/category/edit/edit-category.component";
import {CreateCategoryComponent} from "./component/category/create/create-category.component";
import {SuccessAlertComponent} from "./component/common/alert/success/success-alert.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AlertContainerComponent} from "./component/common/alert/container/alert-container.component";

const documentationRoutes: Routes = [
  { path: 'page/:url', component: PageComponent, canActivate: [AuthGuardService]},
  { path: 'category/:url', component: CategoryComponent, canActivate: [AuthGuardService]},
  { path: 'dashboard/:id', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'create-page', component: CreatePageComponent, canActivate: [AuthGuardService]},
  { path: 'edit-page/:url', component: EditPageComponent, canActivate: [AuthGuardService]},
  { path: 'edit-category/:url', component: EditCategoryComponent, canActivate: [AuthGuardService]},
  { path: 'create-category', component: CreateCategoryComponent, canActivate: [AuthGuardService]},
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  declarations: [
    DocumentationComponent,
    NavbarComponent,
    PageComponent,
    CreatePageComponent,
    EditPageComponent,
    CategoryComponent,
    DashboardComponent,
    EnhancedTextComponent,
    EditCategoryComponent,
    CreateCategoryComponent,
    AlertContainerComponent,
    SuccessAlertComponent
  ],
  imports: [
    RouterModule.forChild(documentationRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    AuthGuardService,
    SettingsService,
    PageService,
    CategoryService
  ],
  bootstrap: [DocumentationComponent],
  entryComponents: [SuccessAlertComponent]
})
export class DocumentationModule { }
