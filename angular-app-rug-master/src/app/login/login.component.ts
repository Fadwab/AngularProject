import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import {Router} from "@angular/router";
import { Location } from "@angular/common";
import { UtilsService } from "../utils.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mode:number=0;


  constructor(private utlis:UtilsService,private authService:LoginService , private router:Router,private location: Location) { }

//public isUserLoggedIn =false;

  onLogin(user){
    //user.preventDefault();
    console.log(user);
    
     this.utlis.setUserLoggedIn();
    this.authService.login(user)
      .subscribe(resp=>{
        this.utlis.setUserLoggedIn();
       console.log(this.utlis.getUserLoggedIn());
       console.log(user);
       if (user.email == 'admin123@gmail.com' && user.password == 'admin123')
         {
//var role = user.target.elements[0].value;
 //console.log(role);
//if (role ==1)
         
    this.router.navigateByUrl("/admin");
         }
  else{

    
    this.router.navigateByUrl('/collaborateur');

 }

      // let jwt=resp.headers.get("Authorization");
       //this.authService.saveToken(jwtToken);

       // console.log(resp.headers.get("Authorization"));
       
        
 
        //this.router.navigateByUrl('/collaborateur')
      },
      err=>{
        this.mode=1;
      })
  }

  ngOnInit() {
  }

}
