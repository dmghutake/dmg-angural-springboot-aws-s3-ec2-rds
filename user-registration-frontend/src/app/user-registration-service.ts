import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationServiceService {
  private REST_API_URL:string ="http://ec2-3-110-43-54.ap-south-1.compute.amazonaws.com:8080";
  constructor(private http:HttpClient) { }

  public doUserRegistraion(user: User){
    return this.http.post(this.REST_API_URL+"/register/user",user,{responseType:'text' as 'json'});
  }
  public getAllUsers(){
    return this.http.get(this.REST_API_URL+"/users");
  }
  public getUserByEmail(email: string){
    return this.http.get(this.REST_API_URL+"/users/"+email);
  }
  public deleteUser(id: number){
    return this.http.delete(this.REST_API_URL+"/users/"+id);
  }
}
