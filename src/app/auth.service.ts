import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Aquí puedes implementar la lógica de autenticación
    if (username === 'usuario' && password === 'contraseña') {
      this.isUserLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    // Realiza cualquier limpieza necesaria al cerrar sesión
    this.isUserLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }
}
