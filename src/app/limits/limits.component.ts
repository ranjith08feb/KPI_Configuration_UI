import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {limits} from './limits'


@Component({
  selector: 'app-limits',
  templateUrl: './limits.component.html',
  styleUrls: ['./limits.component.css']
})
export class LimitsComponent implements OnInit {
    limitsForm : FormGroup;
    limits : limits;

  constructor(private fb : FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.limitsForm = this.fb.group({
      target : [''],
      warningLimit : ['']
    })
  }

}
