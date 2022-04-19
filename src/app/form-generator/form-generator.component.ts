import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {
  @Input() formComponent: any
  public formParent : FormGroup = this.fb.group({})
  constructor(
    private fb : FormBuilder
  ) {
  }

  initForm() {
    let mainGroup:any = {}
    if (this.formComponent.length == 0 ) {
      return false
    }
    this.formComponent.map( (i:any) => {
      let validators = []
      let v = i.validators || []

      if (v.required) {
        validators.push(Validators.required)
      }
      if (v.minLength) {
        validators.push(Validators.minLength(v.minLength))
      }
      if (v.maxLength) {
        validators.push(Validators.maxLength(v.maxLength))
      }
      if (v.min) {
        validators.push(Validators.min(v.min))
      }
      if (v.max) {
        validators.push(Validators.max(v.max))
      }
      if (v.email) {
        validators.push(Validators.email)
      }

      let controller = [i.default]
      if (validators.length > 0 ){
        controller.push(Validators.compose(validators))
      }

      mainGroup[i.control] = controller
    })

    this.formParent = this.fb.group(mainGroup)
    return true
  }
  ngOnInit(): void {
    this.initForm()
  }

}
