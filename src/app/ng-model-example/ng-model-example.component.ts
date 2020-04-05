import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-example',
  templateUrl: './ng-model-example.component.html',
  styleUrls: ['./ng-model-example.component.css']
})
export class NgModelExampleComponent implements OnInit {
  email = "me@example.com";

  onKeyUp() {
    console.log(this.email);
  }

  constructor() { }

  ngOnInit() {
  }

}
