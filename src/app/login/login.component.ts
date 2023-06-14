import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
  <div class="container mt-4">
  <h3>Login</h3>
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" [(ngModel)]="username" class="form-control" id="username" placeholder="Username">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" [(ngModel)]="password" class="form-control" id="password" placeholder="Password">
  </div>
  <div class="mt-3">
    <button (click)="login()" class="btn btn-primary">Login</button>
  </div>
</div>



  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Redirige al componente "Profile" después del inicio de sesión exitoso.
      this.router.navigate(['/profile']);
    } else {
      alert('Credenciales inválidas');
    }
  }
}
