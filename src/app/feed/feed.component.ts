import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() title:string;
  constructor() { }

  ngOnInit(): void {
  }
}

// Decorators

export function LogData(target) {
  console.log(target);

}
@LogData
class ExampleClass {
  name:'this is the name'
  constructor() {
    console.log('Yo!');
  }
}
