import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[];
  valueFilter = '';

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUserList();
  }

  onKey(valueFilter: string) {
    this.valueFilter += valueFilter + ' | ';

    console.log(valueFilter.length > 0);
    if (valueFilter.length > 0)
    {
      this.userList = this.userList.filter(u => u.name.toLowerCase().includes(valueFilter.toLowerCase()));
    }
    else{
      this.getUserList();
    }
  }

  getUserList(){
    this.userService.getUsers().subscribe( (result) => {
      this.userList = result;
    } );
  }
  goToUpdate(id: number) {
    const idUpdate = id.toString();
    const route = '/updateUser/' + idUpdate;
    console.log(route);
    this.router.navigate([route]);
  }

}
