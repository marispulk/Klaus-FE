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
  isLoading: boolean = false;
  userSelectedCounter: number = 0;
  bulkCheck = false;

  constructor(private userService: UserService) {
  }

   // Calls userService method getUsers(), that retrieves data from JSON server
  ngOnInit(): void {
    this.getUsers();
  }

  getRoleClass(user: any) {
    if (user.role == "ADMIN") {
      return "roleAdmin";
    } else if(user.role == "AGENT") {
      return "roleAgent";
    } else if(user.role == "ACCOUNT_MANAGER") {
      return "roleAccountManager";
    } else if(user.role == "EXTERNAL_REVIEWER") {
      return "roleExternalReviewer";
    }
  }

  onUserSelect(user: User, e): void {
    if(e.target.checked == true) {
      this.userSelectedCounter++;
      this.selectedUser = user;
    }
    else{
      this.selectedUser = null;
      this.userSelectedCounter--;
    }
  }

  getUsers(): void {
    this.isLoading = true;
    this.userService.getUsers()
        .subscribe(users => {
          this.userList = users;
          this.isLoading = false;
        });
  }

  onChangePage(pageOfItems: Array<User>) {
    this.pageOfItems = pageOfItems;
  }

  // Check/uncheck all textboxes
  bulkChecks(e) {
    if(e.target.checked == true) {
      this.bulkCheck = true;
    }
    else{
      this.bulkCheck = false;
    }
  }

  deleteUser(user: User): void {
    this.userList = this.userList.filter(u => u !== user);
    this.userService.deleteUser(user).subscribe();
  }

  sortByRole() {
   this.userList = this.userList.sort((a,b) => a.role.localeCompare(b.role));
    console.log(this.userList);
  }

}

