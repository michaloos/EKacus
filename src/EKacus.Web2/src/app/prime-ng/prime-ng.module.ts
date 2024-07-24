import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    ButtonModule,
    MenubarModule,
    DynamicDialogModule,
    // BrowserModule,
    // BrowserAnimationsModule,
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    DynamicDialogModule,
    // BrowserModule,
    // BrowserAnimationsModule,
  ],
  providers: [
    DialogService,
    DynamicDialogRef
  ]
})
export class PrimeNgModule { }
