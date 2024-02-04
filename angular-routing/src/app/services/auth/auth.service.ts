import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) {}

  // setToken(token: string): void {
  //   localStorage.setItem('token', token);
  //   localStorage.setItem('isLoggedIn', 'true');
  // }
  // getToken(): string | null {
  //   return localStorage.getItem('token');
    
  // }
  // logout() {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('isLoggedIn');
  //   this.router.navigate(['login']);
  // }

  // isLoggedIn() {
  //   return localStorage.getItem('isLoggedIn') === 'true';
  // }
  setToken(token: string): void {
    this.cookieService.set('token', token);
    this.cookieService.set('isLoggedIn', 'true');
  }

  getToken(): string | null {
    return this.cookieService.get('token');
  }

  isLoggedIn() {
    return  this.cookieService.get('isLoggedIn') === 'true';
  }

  logout() {
    this.cookieService.delete('token');
    this.cookieService.delete('isLoggedIn');
    this.router.navigate(['login']);
  }
  

  login({ username, password }: any): Observable<any> {
    const body = { username, password };

    return this.http.post<any>(environment.baseUrl, body, { observe: 'response' }).pipe(
      catchError((error) => {
        console.error('Login failed:', error);
        return throwError('Failed to login');
      }),
      map((response) => {
        const token = response.body.token;
        console.log(token);
        if (token) {
          this.setToken(token);

        }

        return response;
      })
    );
  }
}
