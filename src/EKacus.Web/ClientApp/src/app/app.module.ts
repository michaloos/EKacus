import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgPrimeModule} from "./ngPrime.module";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    NgPrimeModule,
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
    ]),
    BreadcrumbComponent
  ],
  providers: [BrowserModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
