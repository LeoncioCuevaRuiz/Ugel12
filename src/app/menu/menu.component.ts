import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  titulo1: string[] = ["UGEL 12","ESTRUCTURA ORGANICA","SERVICIOS","CIUDADANO","INTRANET"];
  tituloUgel: string[] = [""];

  collapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
