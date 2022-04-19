import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() formParent: FormGroup = this.fb.group({})
  @Input() field: any = {}
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.field)
  }

}
