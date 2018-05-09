import { Component, OnInit } from '@angular/core';
import {  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-delete-salle',
  templateUrl: './delete-salle.component.html',
  styleUrls: ['./delete-salle.component.css']
})
export class DeleteSalleComponent implements OnInit {
constructor(
    public dialogRef: MatDialogRef<DeleteSalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
   
    },) { }

  ngOnInit() {
  }

}
