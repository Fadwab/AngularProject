import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService {
private host:string="http://localhost:8000/api/users/login";
  private jwtToken=null;
  private roles:Array<any>=[];
  constructor(private http:HttpClient) { }



  login(user){
    return this.http.post(this.host,user, {observe : "response"});
  }
  logout(){
    this.jwtToken=null;
    localStorage.removeItem("token");
  }
  
  loadToken(){
    this.jwtToken=localStorage.getItem("token");
  }
 

}
