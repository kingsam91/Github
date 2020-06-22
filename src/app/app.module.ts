import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { PagesFormComponent } from './pages-form/pages-form.component';
import { PagesReposComponent } from './pages-repos/pages-repos.component';
import { HideFormDirective } from './hide-form.directive';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PagesFormComponent,
    PagesReposComponent,
    HideFormDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
