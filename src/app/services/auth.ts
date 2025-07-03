import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private baseUrl = environment.serverBaseUrl;

  constructor(private http: HttpClient) { }

  login(badgeNumber:string, password:string ): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { badgeNumber, password });
  }
  
}
