import { Component } from '@angular/core';
import {NgPrimeModule} from "../ngPrime.module";

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NgPrimeModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

}
