import { Component, Input, OnInit } from '@angular/core';
import { TaggedItem } from 'src/app/interfaces/TaggedItem';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input()
  selectorName: string = '';
  @Input()
  dropOptions: TaggedItem[] = [];
  isVisible: boolean = false;
  
  selected: TaggedItem = {tagName: '', id: 0};


  constructor() { }

  ngOnInit(): void {
  }
  toggleVisibility(): void {
    this.isVisible ? this.isVisible = false : this.isVisible = true;
  }
  updateSelected(option: TaggedItem): void {
    this.selected = option;
    this.selectorName = option.tagName
    this.isVisible = false;
  }


}
