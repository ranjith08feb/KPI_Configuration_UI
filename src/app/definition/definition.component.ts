import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { timeVariants, units, reportingAggregations, states, goodDirections } from './definition';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {

  definitionForm: FormGroup;
  timeVariants = timeVariants;
  units = units;
  reportingAggregations = reportingAggregations;
  states = states;
  goodDirections = goodDirections;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.definitionForm = this.fb.group({
      kpiName: ['', Validators.required],
      description: [''],
      dataType: [''],
      displayName: [''],
      kpiType: [''],
      uom: [''],
      asset: [''],
      manual: [''],
      frequency: [''],
      unit: [''],
      reportingAggregation: [''],
      state: [''],
      goodDirection: [''],
      effectiveDateTime: [''],
      raiseEvents: [''],
      securityCode: [''],
      basedOn: [''],
      calculationDealy: [''],
      isComposite: [''],
      timeVariant: [''],
      limitSource: [''],
      assetAttribute: [''],
      stringFiled1: [''],
      stringFiled2: [''],
      stringFiled3: [''],
      stringFiled4: [''],
      stringFiled5: [''],
      stringFiled6: [''],
      stringFiled7: [''],
      stringFiled8: [''],
      stringFiled9: [''],
      stringFiled10: [''],
      stringFiled11: [''],
      stringFiled12: [''],
      stringFiled13: [''],
      numericField1: [''],
      numericField2: [''],
      numericField3: [''],
      numericField4: [''],
      numericField5: ['']
    })
  }

}
