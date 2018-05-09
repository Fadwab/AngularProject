import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RugModule } from './rug/rug.module';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule , MatButtonModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from '../demo-utils/module';
import { CalendarModule } from 'angular-calendar';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';




//import { FullCalendarModule } from 'ng-fullcalendar';

import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

import { MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { ReservationComponent } from './reservation/reservation.component';
import { UsertableComponent} from './usertable/usertable.component';

import{ UserService} from './user.service';
import{ ChatService} from './services/chat.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ConsultReservationComponent } from './consult-reservation/consult-reservation.component';
import { LoginComponent } from './login/login.component';
import { DeleteReservationComponent } from './delete-reservation/delete-reservation.component';
import { GestionAcceeComponent } from './gestion-accee/gestion-accee.component';
import { DeleteCollaborateurComponent } from './delete-collaborateur/delete-collaborateur.component';
import { ConsultCollaborateurComponent } from './consult-collaborateur/consult-collaborateur.component';
import { EditCollaborateurComponent } from './edit-collaborateur/edit-collaborateur.component';
import { GestionSallesComponent } from './gestion-salles/gestion-salles.component';
import { DeleteSalleComponent } from './delete-salle/delete-salle.component';
import { ConsultSalleComponent } from './consult-salle/consult-salle.component';
import { EditSalleComponent } from './edit-salle/edit-salle.component';
import { ChatComponent } from './chat/chat.component';
import {CalendarrComponent} from './calendarr/calendarr.component';
import { ReservationEventComponent } from './reservation-event/reservation-event.component'
import {AjoutReservationComponent} from './ajout-reservation/ajout-reservation.component';
import { AddCollaborateurComponent } from './add-collaborateur/add-collaborateur.component'

import {SalleService} from './service/salle.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [
    AppComponent,
CalendarrComponent,

    ReservationComponent,
    UsertableComponent,
    EditReservationComponent,
    RechercheComponent,
    ConsultReservationComponent,
    LoginComponent,
    DeleteReservationComponent,
    GestionAcceeComponent,
    DeleteCollaborateurComponent,
    ConsultCollaborateurComponent,
    EditCollaborateurComponent,
    GestionSallesComponent,
    DeleteSalleComponent,
    ConsultSalleComponent,
    EditSalleComponent,
    ChatComponent,
    ReservationEventComponent,
    AjoutReservationComponent,
    AddCollaborateurComponent,
    
  ],
  imports: [
    RugModule,
    CommonModule,
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    FormsModule,
    NgbModalModule.forRoot(),
    DemoUtilsModule,
     MatIconModule,
    MatInputModule , MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    OwlDateTimeModule,
     OwlNativeDateTimeModule, 
MatSlideToggleModule,
FormsModule, ReactiveFormsModule,
MatToolbarModule,
MatSortModule,
AngularFontAwesomeModule
//FullCalendarModule
  ],
  entryComponents: [
     AddCollaborateurComponent,
    EditReservationComponent,
    ConsultReservationComponent,
    DeleteReservationComponent,
    DeleteCollaborateurComponent,
    ConsultCollaborateurComponent,
    EditCollaborateurComponent,
    DeleteSalleComponent,
    ConsultSalleComponent,
    EditSalleComponent,
    AjoutReservationComponent,

  ],

  providers: [
    UserService,
    ChatService,
    SalleService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
