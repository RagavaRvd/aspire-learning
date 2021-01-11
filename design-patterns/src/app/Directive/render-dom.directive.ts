import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRenderDom]'
})
export class RenderDomDirective implements OnInit {
  @Input() renderData: string;
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit() {
    this.elementRef.nativeElement.innerHTML = 'this is the data is comming from the custome directive'
    console.log('userId is:', this.renderData);
  }
}
