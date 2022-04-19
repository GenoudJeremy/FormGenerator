import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() formParent: FormGroup = this.fb.group({})
  @Input() field: any = {}
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.formParent)
    console.log(this.field)
  }

}
