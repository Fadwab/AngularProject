import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from './user.service';
import { UtilsService } from "./utils.service";

 @Injectable() export class AuthguardGuard implements CanActivate {
    constructor(private user: UtilsService , private router : Router){} 
   
      canActivate( next: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean { 
          if (this.user.isUserLoggedIn==false){
          this.router.navigate(['/']);
          }
         return this.user.getUserLoggedIn(); 
        }}