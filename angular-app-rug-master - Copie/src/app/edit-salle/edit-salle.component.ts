import { Component, OnInit } from '@angular/core';
import {  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.css']
})
export class EditSalleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditSalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
