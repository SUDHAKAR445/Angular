import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(): void {
    const userRole: string = 'LIBRARIAN';
    this.navigateBasedOnRole(userRole);
  }

  signUp(): void {
    const userRole: string = 'LIBRARIAN';
    this.navigateBasedOnRole(userRole);
  }

  private navigateBasedOnRole(userRole) {
    switch (userRole) {
      case 'ADMIN':
        this.router.navigate(['/admin']);
        break;
      case 'LIBRARIAN':
        this.router.navigate(['/librarian']);
        break;
      default:
        this.router.navigate(['/member']);
        break;
    }
  }
}
