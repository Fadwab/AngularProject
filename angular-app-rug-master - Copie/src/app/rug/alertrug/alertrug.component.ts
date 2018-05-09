import { AlarmClock } from '../alarm-clock/alarm-clock';
import { AlertRug } from './alertrug';
import { AlertRugService } from './../alertrug/alertrug.service';
//import { DateFormatter } from '@angular/common/src/pipes/intl';
import { MP3Playback } from './../mp3-playback/mp3-playback';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MP3PlaybackService } from '../mp3-playback/mp3-playback.service';
import { Observable, Subscription } from 'rxjs/Rx';
/*import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';*/

@Component({
  selector: 'app-alertrug',
  templateUrl: './alertrug.component.html',
  styleUrls: ['./alertrug.component.css']
})
export class AlertRugComponent {
  /*calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor() {}
  ngOnInit() {
     this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
       
      };
  }*/
}
