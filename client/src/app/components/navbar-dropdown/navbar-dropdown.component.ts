import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.scss']
})
export class NavbarDropdownComponent implements OnInit {

  @Input() expanded: boolean = false;
  @Output() expand: EventEmitter<any> = new EventEmitter();
  @Output() collapse: EventEmitter<any> = new EventEmitter();

  @Input()
  buttonName: string = '';

  @Input()
  dropdownOptions: {label: string, link: string}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler() {
    if (!this.expanded) this.expand.emit(this.buttonName);
    else this.collapse.emit(this.buttonName);
  }

}
