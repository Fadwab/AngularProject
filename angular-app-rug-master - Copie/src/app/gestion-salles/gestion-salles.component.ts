import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatPaginator} from '@angular/material';
import { DeleteSalleComponent } from "../delete-salle/delete-salle.component";
import { ConsultSalleComponent } from "../consult-salle/consult-salle.component";
import { EditSalleComponent } from "../edit-salle/edit-salle.component";

@Component({
  selector: 'app-gestion-salles',
  templateUrl: './gestion-salles.component.html',
  styleUrls: ['./gestion-salles.component.css']
})
export class GestionSallesComponent implements OnInit {
  id:number;
nom : string;
 etage:number;
 bloc : string;
 capacite:number;












  displayedColumns = ['id', 'nom', 'etage', 'bloc','capacite' ,'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

 @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(public dialog: MatDialog) { }




  ngOnInit() {
  }

  openDialogDelete(): void {
    let dialogRef = this.dialog.open(DeleteSalleComponent, {
      height: '30%',
      width: '40%',

      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
openDialogConsult(value , value1 , value2 , value3 ,value4,value5,value6): void {
    let dialogRef = this.dialog.open(ConsultSalleComponent , {

  height: '50%',
  width: '50%',

     data: {
          id: value,
          nom:value1,
         etage:value2,
          bloc:value3,
          capacite : value4,
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
 openDialog(value4): void {
    let dialogRef = this.dialog.open(EditSalleComponent, {
      height: '80%',
      width: '50%',

      data: {
       
          nom:value4,
         

        }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }





}
export interface Element {
 nom: string;
 id: number;
  etage: number;
 bloc: string;
 capacite:number;

}

const ELEMENT_DATA: Element[] = [
  {id:1, nom: 'Ellisa',etage: 3, bloc: 'A',capacite:2},
  {id:2 ,nom: 'Hannibal', etage: 2, bloc: 'B',capacite:4},
 {id:1, nom: 'Ellisa',etage: 3, bloc: 'A',capacite:2},
  {id:2 ,nom: 'Hannibal', etage: 2, bloc: 'B',capacite:4},
  {id:1, nom: 'Ellisa',etage: 3, bloc: 'A',capacite:2},
  {id:2 ,nom: 'Hannibal', etage: 2, bloc: 'B',capacite:4},
];