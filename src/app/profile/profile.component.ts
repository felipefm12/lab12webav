import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  template: `
  <div class="container">
  <h2>Perfil de usuario</h2>
  <p>Bienvenido {{ username }}!</p>
  <button (click)="logout()" class="btn btn-danger">Cerrar sesión</button>
</div>

  `
})
export class ProfileComponent {
  username: string = '';

  constructor(private authService: AuthService) {
    // Obtén los datos del usuario actual desde el servicio de autenticación
    this.username = 'usuario'; // Reemplaza con la lógica para obtener el nombre de usuario del usuario autenticado.
  }

  logout(): void {
    this.authService.logout();
  }
}
