import { Injectable } from '@angular/core';


 @Injectable() export class UtilsService {
    public isUserLoggedIn;
     private username;
     constructor(){ this.isUserLoggedIn=false; } 
     setUserLoggedIn(){
        this.isUserLoggedIn=true; } 
     getUserLoggedIn(){ 
       return this.isUserLoggedIn; }
    
    } 