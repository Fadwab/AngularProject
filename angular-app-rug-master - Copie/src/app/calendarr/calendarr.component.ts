import { Component, OnInit, ViewChild } from '@angular/core';
/*import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';*/
@Component({
  selector: 'app-calendarr',
  templateUrl: './calendarr.component.html',
  styleUrls: ['./calendarr.component.css']
})

export class CalendarrComponent implements OnInit {
  
  /*calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;*/
  constructor() {}
  ngOnInit() {
     /*this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        //events: data
      };*/
  }      
}
