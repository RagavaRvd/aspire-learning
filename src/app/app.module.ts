import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { TemperatureMonitorComponent } from './temperature-monitor/temperature-monitor.component';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [
    TemperatureMonitorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents:[
    TemperatureMonitorComponent
  ]
})
export class AppModule { 
  constructor(private injector:Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(TemperatureMonitorComponent,{injector:this.injector})
    customElements.define('temperature-monitor', el)
  }
}
