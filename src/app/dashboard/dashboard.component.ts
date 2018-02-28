import { Component, OnInit } from '@angular/core';
import {items} from './items';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items =  items;
  constructor() { }

  ngOnInit() {
  }

}
