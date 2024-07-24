import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNgModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [BrowserAnimationsModule, BrowserModule]
})
export class AppComponent implements OnInit {
  title = 'EKacus.Web';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
      this.primengConfig.ripple = true;
  }
}
