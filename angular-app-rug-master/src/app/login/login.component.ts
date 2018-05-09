import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import {Router} from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mode:number=0;


  constructor(private authService:LoginService , private router:Router,private location: Location) { }

public navigate(): void {
   this.router.navigateByUrl('/articledetail', {skipLocationChange: true});
   this.location.replaceState('/articledetail');

}

  onLogin(user){
    console.log(user);
    this.authService.login(user)
      .subscribe(resp=>{
       //let jwt=resp.headers.get("Authorization");
        //console.log(jwt);
       
        this.router.navigateByUrl("/calendar");
      },
      err=>{
        this.mode=1;
      })
  }

  ngOnInit() {
  }

}
