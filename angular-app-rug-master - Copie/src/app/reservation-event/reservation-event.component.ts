import { Component, OnInit, ChangeDetectionStrategy, ViewChild,TemplateRef} from '@angular/core';


import {startOfDay,endOfDay,subDays,addDays,endOfMonth,isSameDay,isSameMonth,addHours} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent,CalendarEventAction,CalendarEventTimesChangedEvent} from 'angular-calendar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AjoutReservationComponent } from "../ajout-reservation/ajout-reservation.component";

import {SalleService} from './../service/salle.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-reservation-event',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reservation-event.component.html',
  styleUrls: ['./reservation-event.component.css']
})
export class ReservationEventComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    /*{
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },*/
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.salleService.deleteReservation(event.id).subscribe(
          () => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            this.handleEvent('Deleted', event);
          },
          () => {}
        );
        
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[];
  

  /*

   = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];
  */

  activeDayIsOpen: boolean = true;
  constructor(
    private modal: NgbModal,
    public dialog: MatDialog,
    private salleService: SalleService
  ) {
    this.salleService.getReservations().subscribe(
      (events: CalendarEvent[]) => { 
        this.events= [
    {
      id: 1,
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions
    },
    {
      id: 2,
      start: startOfDay(new Date()),
      
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      id: 3,
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      id: 4,
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ]; 
  
  this.events.map(item => item.actions = this.actions);
  console.log(events)},
      (error) => { console.log(error)}
    );
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

   handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    console.log(subDays(startOfDay(new Date()), 1));
    this.events.push({
      title: 'bbbbbbb',

      // start: addHours('2018-04-15T10:30:00', -2),
      // end: addHours('2018-04-15T10:30:00', 5),
    
    start: new Date(),
      end: addDays(new Date(), 1),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }

  ngOnInit() {
  }



  openDialog(): void {
    let dialogRef = this.dialog.open(AjoutReservationComponent, {
      width: '70%',
      height:'90%',
       
    });
    const sub = dialogRef.componentInstance.onAdd.subscribe((data) => {
        //console.log(subDays(endOfMonth(new Date()), 3));
        //console.log(data.heureDebut);
        
        console.log(data);
        this.events.push({
          title: data.titre,
          start: data.heure_deb,
          end: data.heure_fin,
          color: data.color,
          draggable: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          }
        });
        this.refresh.next();
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        sub.unsubscribe();
      });
  }

}
