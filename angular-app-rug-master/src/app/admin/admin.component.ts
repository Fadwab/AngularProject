import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../utils.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private utils:UtilsService) { }

  ngOnInit() {
  }

}
