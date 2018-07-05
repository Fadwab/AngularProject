import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { LoginService } from "./login.service";
import {Router} from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
mode:number=0;


  constructor(private authService:LoginService , private router:Router,private location: Location) { }



  onLogin(user){
    console.log(user);
    
    this.authService.login(user)
      .subscribe(resp=>{
       let jwt=resp.headers.get("Authorization");
       //this.authService.saveToken(jwtToken);

        console.log(resp.headers.get("Authorization"));
       
        this.router.navigateByUrl("/month");
      },
      err=>{
        this.mode=1;
      })
  }

  ngOnInit() {
  }

}
