import { Component } from '@angular/core';

let dataLoading = {
  speed: 'ms8',
  child: {
    speed: 'ms7',
    child: {
      speed: 'ms6',
      child: {
        speed: 'ms5',
        child: {
          speed: 'ms4',
          child: {
            speed: 'ms3',
            child: {
              speed: 'ms2',
              child: {
                speed: 'ms1',
                child: {
                  speed: 'ms1',
                  child: {
                    speed: 'ms1'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

let formComponent = [
  {
    type: "text",
    label: 'input 1',
    default: null,
    control: 'INPUT_1',
    validators: {
      required: true,
    }
  },
  {
    type: 'text',
    label: 'input 2',
    default: 'Valeur 2',
    control: 'INPUT_2',
    validators: {
      email: true
    }
  },
  {
    type: 'text',
    label: 'input 3',
    default: null,
    control: 'INPUT_3'
  },
  {
    type: 'select',
    label: 'select',
    default: null,
    control: 'SELECT_1',
    validators: {
      required: true,
    },
    possibleValues : [
      {label: 'option 1', value: 1},
      {label: 'option 2', value: 2},
      {label: 'option 3', value: 3},
      {label: 'option 4', value: 4},
      {label: 'option 5', value: 5},
    ]
  },
  {
    type: 'radio',
    label: 'Radio',
    default: null,
    control: 'RADIO_1',
    validators: {
      required: true,
    },
    possibleValues : [
      {label: 'option 1', value: 1},
      {label: 'option 2', value: 2},
      {label: 'option 3', value: 3},
      {label: 'option 4', value: 4},
      {label: 'option 5', value: 5},
    ]
  },
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoadingEffect';
  data = dataLoading
  formComponent = formComponent
}
