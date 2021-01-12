import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  single: any[] = [
    {
      "name": "9Am",
      "value": 29
    },
    {
      "name": "10Am",
      "value": 25
    },
    {
      "name": "11Am",
      "value": 30
    }
  ]
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Temperature';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(eve) {
    console.log(eve);
  }

}
