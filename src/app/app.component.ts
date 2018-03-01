import { Component } from '@angular/core';
import {items} from './dashboard/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  items = items;
}
