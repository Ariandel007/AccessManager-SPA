import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForLogin: any = {};
  userForRegister: any = {};
  wantsToRegister = true;

  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userForLogin).subscribe(
      next => {
        this.toastr.success('Inicio de sesion satisfactorio');
      },
      error => {
        this.toastr.error(error);
      },
      () => {
        this.router.navigate(['/users']);
      }
    );
  }

  register() {
    this.authService.register(this.userForRegister).subscribe(
      () => {
        this.toastr.success('Registro exitoso');
      },
      error => {
        this.toastr.error(error);
      },
      () => {
        this.authService.login(this.userForRegister).subscribe(() => {
          this.router.navigate(['/users']);
        });
      }
    );
  }

  toggleRegister()
  {
    this.wantsToRegister = !this.wantsToRegister;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}
