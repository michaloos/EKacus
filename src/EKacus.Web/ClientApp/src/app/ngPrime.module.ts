import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {CardModule} from "primeng/card";
import {MegaMenuModule} from "primeng/megamenu";

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    MenubarModule,
    DynamicDialogModule,
    BreadcrumbModule,
    CardModule,
    MegaMenuModule,
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    DynamicDialogModule,
    BreadcrumbModule,
    CardModule,
    MegaMenuModule,
  ],
  providers: [
    DialogService,
    DynamicDialogRef
  ]
})
export class NgPrimeModule { }
