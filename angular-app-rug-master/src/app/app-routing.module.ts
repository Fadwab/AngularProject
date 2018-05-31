import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { ReservationEventComponent } from "./reservation/reservation-event/reservation-event.component";
import { ReservationComponent } from "./reservation/reservation/reservation.component";
import { GestionAcceeComponent } from "./user/gestion-accee/gestion-accee.component";
import { GestionSallesComponent } from "./salle/gestion-salles/gestion-salles.component";
import { ChatComponent } from "./chat/chat/chat.component";
import { CollaborateurComponent } from "./collaborateur/collaborateur.component";
import { ReservationEventDayComponent } from "./reservation/reservation-event-day/reservation-event-day.component";
import { ReservationEventWeekComponent } from "./reservation/reservation-event-week/reservation-event-week.component";
import { LesSallesComponent } from "./salle/les-salles/les-salles.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthguardGuard } from "./authguard.guard";
const routes: Routes = [
    {path: 'admin' ,component:AdminComponent, pathMatch:'prefix', canActivate:[AuthguardGuard],
    children: [  
      
      { path: '', component: ReservationEventComponent, },
      { path: 'reserv', component:ReservationComponent },
            {
                path:'gestion',
                component: GestionAcceeComponent,
            },
            
          { path: 'lesSalles' ,component: LesSallesComponent},
          
          { path: 'gestionSalles', component: GestionSallesComponent, },
          
          ]
    },
    {path: 'collaborateur' ,component:CollaborateurComponent, canActivate:[AuthguardGuard],
  children: [  
      
      { path: '', component: ReservationEventComponent, },
      { path: 'reserv', component:ReservationComponent },
      { path: 'lesSalles' ,component: LesSallesComponent},
  ]
  
  
  
  
  },

    //{ path: 'dashboard', component: AppContenuComponent },
     { path: 'login', component: LoginComponent, },

    // { path: 'month', component: ReservationEventComponent, },
     { path: 'reserv', component:ReservationComponent },
    //{ path: 'gestion', component: GestionAcceeComponent, },  
   // { path: 'gestionSalles', component: GestionSallesComponent, },
    { path: 'chat', component: ChatComponent,},
  
    { path: 'day' ,component: ReservationEventDayComponent},
     { path: 'week' ,component: ReservationEventWeekComponent},
     //{ path: 'lesSalles' ,component: LesSallesComponent},
     
    
     { path: '', redirectTo:'login',pathMatch:"full" },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
   
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
