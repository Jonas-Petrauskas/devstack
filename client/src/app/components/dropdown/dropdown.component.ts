import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input()
  selectorName: string = '';
  @Input()
  dropOptions: {name: string, id: number}[] = [];
  isVisible: boolean = false;
  
  selected: {name: string, id: number} = {name: '', id: 0};


  constructor() { }

  ngOnInit(): void {
  }
  toggleVisibility(): void {
    this.isVisible ? this.isVisible = false : this.isVisible = true;
  }
  updateSelected(option: {name: string, id: number}): void {
    this.selected = option;
    this.selectorName = option.name
    console.log(this.selected);
  }


}
