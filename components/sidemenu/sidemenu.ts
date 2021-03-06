import {Component, Input, Output, EventEmitter, ElementRef, OnInit} from 'angular2/core';
@Component({
  selector: 'ng-sidemenu',
  directives: [],
  pipes: [],
  template: `
  `
})
export class SideMenuComponent implements OnInit {
  @Input() public data: { [category: string]: any[]};
  @Output() public selected:EventEmitter<any> = new EventEmitter();
  public constructor(element:ElementRef) {
    this.element = element;
  }
}
