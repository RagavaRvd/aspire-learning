import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-temperature-monitor',
  templateUrl: './temperature-monitor.component.html',
  styleUrls: ['./temperature-monitor.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TemperatureMonitorComponent implements OnInit {
  cityArray: any = []
  weather: any = false
  constructor(private http: HttpClient) {
  }
  
  ngOnInit(): void {
    this.http.get(`${environment.corsServer}/${environment.endPoint}/data/2.5/weather?id=1264527&appid=${environment.api}`).subscribe(data => {
      console.log('data=>', data);
      this.weather = data;
    }, error => {
      console.log('error=>', error);
    })
  }
}
