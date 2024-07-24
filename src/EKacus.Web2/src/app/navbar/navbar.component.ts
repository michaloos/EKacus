import { Component } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuItem } from 'primeng/api';
import { LoginComponent } from '../login/login.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    protected loginDialogRef?: DynamicDialogRef = undefined;

    constructor(private dialogService: DialogService){

    }

    protected login(){
        this.loginDialogRef = this.dialogService.open(LoginComponent,{
            header: 'Zaloguj się',
            width: '350px',
            modal:true,
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
        });
    }

  protected items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home'
  },
  {
      label: 'Features',
      icon: 'pi pi-star'
  },
  {
      label: 'Projects',
      icon: 'pi pi-search',
  },
  {
      label: 'Contact',
      icon: 'pi pi-envelope',
      badge: '3'
  }
  ];
}
