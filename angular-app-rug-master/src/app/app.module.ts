
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';


import{ UserService} from './user.service';
import{ ChatService} from './services/chat.service';
import {SalleService} from './service/salle.service';

import { AppRoutingModule } from "./app-routing.module";
import { ReservationModule } from "./reservation/reservation.module";
import { UserModule } from "./user/user.module";
import { ChatModule } from "./chat/chat.module";
import { SalleModule } from "./salle/salle.module";
import { SharedModule } from "./shared/shared.module";
import { LoginService } from "./login.service";
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { AdminComponent } from './admin/admin.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { NavComponent } from './nav/nav.component';
import { UtilsService } from "./utils.service";
import { AuthguardGuard } from "./authguard.guard";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   CollaborateurComponent,
    AdminComponent,
    SanitizeHtmlPipe,
    NavComponent,
   
    
    
  ],
  imports: [

    CommonModule,
   
    AppRoutingModule,
    //AppContenuComponent,
    //FullCalendarModule,
    ReservationModule,
    UserModule,
    SalleModule,
    ChatModule,
    SharedModule
  ],
  exports:[
AdminComponent,

  ],

  providers: [
    UserService,
    ChatService,
    SalleService,
    LoginService,
    UtilsService,
     AuthguardGuard
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
