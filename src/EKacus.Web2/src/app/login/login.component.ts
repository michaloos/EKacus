import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  protected visible = false;

  constructor(private cd: ChangeDetectorRef){

  }
}
