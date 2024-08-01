import { Component } from '@angular/core';
import {MegaMenuItem, MenuItem} from "primeng/api";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  protected menuBarItems : MenuItem[] = [
    {label: 'Użytkownicy', icon: 'pi pi-users', items: [
        { label: 'Dyrekcja' },
        { label: 'Nauczyciele' },
        { label: 'Rodzice' },
        { label: 'Uczniowie' },
      ]},
    { label: 'Klasy', icon: 'pi pi-graduation-cap' },
    { label: 'Plan zajęć', icon: 'pi pi-calendar-clock' },
    { label: 'Raporty', icon: 'pi pi-server' },
  ];
}
