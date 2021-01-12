import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injector, NgModule } from '@angular/core';

import { TemperatureComponent } from './temperature/temperature.component';
import { createCustomElement } from '@angular/elements';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    TemperatureComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents:[TemperatureComponent]
})
export class AppModule { 
  
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(TemperatureComponent, { injector: this.injector });
    customElements.define('temperature-monitor', el);
  }
}
