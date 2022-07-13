import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationServiceService } from '../user-registration-service';

@Component({
  selector: 'app-user-search-delete',
  templateUrl: './user-search-delete.component.html',
  styleUrls: ['./user-search-delete.component.css']
})
export class UserSearchDeleteComponent implements OnInit {
  users:any;
  email: string;
  constructor(private service:UserRegistrationServiceService) { }

  ngOnInit(): void {
    let resp=this.service.getAllUsers();
    resp.subscribe((data)=>this.users=data);
  }

  public deleteUser(id: number){
   let resp= this.service.deleteUser(id);
   resp.subscribe((data)=>this.users=data);
  }
  public findUserByEmail(){
    let resp= this.service.getUserByEmail(this.email);
    resp.subscribe((data)=>this.users=data);
   }
}
