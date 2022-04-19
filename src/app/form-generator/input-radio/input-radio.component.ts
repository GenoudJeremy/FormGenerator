import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent implements OnInit {
  @Input() formParent: FormGroup = this.fb.group({})
  @Input() field: any = {}
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
