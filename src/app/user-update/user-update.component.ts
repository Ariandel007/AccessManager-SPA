import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  userForUpdate: any = {};
  id: number;

  constructor(
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.userService.getUser(this.id).subscribe((result) => {
      this.userForUpdate = result;
    } );
  }

  update() {
    this.userService.updateUser(this.id, this.userForUpdate).subscribe(
      () => {
        this.toastr.success('Actalizacion exitosa');
        this.router.navigate(['/users']);
      },
      error => {
        this.toastr.error(error);
      },
    );
  }
}
