import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: any;
  selectedUser: any;

  constructor() {
    this.userList = [
      {"id":10001,"name":"Geraldine Daniel","email":"Estelle_Crona@example.org","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/fran_mchamy/128.jpg","role":"ADMIN"},
      {"id":10002,"name":"Hugh Graham","email":"Roxanne30@example.com","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/a1chapone/128.jpg","role":"AGENT"},
      {"id":10003,"name":"Johnathan Feeney","email":"Junius35@example.org","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/puzik/128.jpg","role":"ACCOUNT_MANAGER"},
      {"id":10010,"name":"Chris Ankunding DVM","email":"Linwood.Fritsch34@example.com","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jitachi/128.jpg","role":"EXTERNAL_REVIEWER"}
    ]
   }

  ngOnInit(): void {
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

  onSelect(user: any): void {
    this.selectedUser = user;
  }
}
