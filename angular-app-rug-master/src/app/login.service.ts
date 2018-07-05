import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService {
private host:string="http://localhost:8000/webapi/login";
  private jwtToken:String;
  private roles:Array<any>=[];
  constructor(private http:HttpClient) { }
  role:boolean;


  getrole(user){
   return this.http.get(this.host,user.username); 
  }
  login(user){
    console.log(this.http.post(this.host,user));
    console.log("test Role"+JSON.stringify( this.http.post(this.host,user, {observe : "response"})))
    
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
