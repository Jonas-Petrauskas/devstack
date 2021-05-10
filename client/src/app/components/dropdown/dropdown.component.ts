import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output()
  selectedOption = new EventEmitter<TaggedItem>();


  constructor() { }

  ngOnInit(): void {
  }
  toggleVisibility(): void {
    this.isVisible ? this.isVisible = false : this.isVisible = true;
  }
  updateSelected(option: TaggedItem): void {
    this.selected = option;
    this.selectorName = option.tagName
    this.selectedOption.emit(this.selected)
    this.isVisible = false;
  }


}
