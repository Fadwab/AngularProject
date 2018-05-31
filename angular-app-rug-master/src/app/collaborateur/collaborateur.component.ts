import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../utils.service";

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  constructor(private utlis:UtilsService) { }

  ngOnInit() {
  }

}
