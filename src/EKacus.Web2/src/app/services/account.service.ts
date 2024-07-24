import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AccountService{
    private apiUrl = 'https://localhost:5067/api/account';

    constructor(private http: HttpClient) { }

    register(model: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, model);
      }
    
      login(model: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, model);
      }

      logout(model: any): Observable<any>{
        return this.http.post(`${this.apiUrl}/login`, model);
      }
}