import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForRegister: any = {};

  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
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
}
