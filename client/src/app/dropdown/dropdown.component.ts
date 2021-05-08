import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  selectorName: string = 'Selector';
  dropOptions: {name: string, id: number}[] = [{name: 'name1', id: 1},{name: 'name2', id: 2},{name: 'name3', id: 3}];
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
