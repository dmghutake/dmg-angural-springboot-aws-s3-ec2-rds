import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationServiceService } from '../user-registration-service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user:User= new User("","",0,"");
  message:any;
  constructor(private service:UserRegistrationServiceService) { }

  ngOnInit(): void {
  }

  public registerNow(){
   let resp= this.service.doUserRegistraion(this.user);
   resp.subscribe((data)=>this.message=data);
  }
}
