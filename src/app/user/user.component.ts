import { Component, OnInit } from '@angular/core';
import { User } from '../_shared/user';
import { UserService } from '../_services/user.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: User[];
  selectedUser: User;
  pageOfItems: Array<User>;


  constructor(private userService: UserService) {

   }

  ngOnInit(): void {
    this.getUsers();
  }

  getRoleClass(user: any) {
    if (user.role == "ADMIN") {
      return "roleAdmin";
    }
    if(user.role == "AGENT") {
      return "roleAgent";
    }
    if(user.role == "ACCOUNT_MANAGER") {
      return "roleAccountManager";
    }
    if(user.role == "EXTERNAL_REVIEWER") {
      return "roleExternalReviewer";
    }
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => this.userList = users);
  }

  onChangePage(pageOfItems: Array<User>) {
    this.pageOfItems = pageOfItems;
  }
}
