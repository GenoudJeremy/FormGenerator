import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css']
})
export class LoadingBlockComponent implements OnInit {
  @Input() dataLoading: any
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataLoading)
  }

}
