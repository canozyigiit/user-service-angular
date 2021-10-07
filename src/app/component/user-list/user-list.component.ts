import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[]
  userName:String
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getUserName();
  }

  getUsers() {
    this.userService.getUsers().subscribe(response=>{
      this.users = response.data;
      console.log(response);
    })
   }

   getUserName(){
    return localStorage.getItem("user");
   }
}
