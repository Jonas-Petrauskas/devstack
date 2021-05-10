import { Component, Input, OnInit } from '@angular/core';
import { TaggedItem } from 'src/app/interfaces/TaggedItem';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchString: string = '';
  @Input()
  placeString: string = '';
  @Input()
  allOptions: TaggedItem[] = [];
  
  filteredOptions: TaggedItem[] = [];
  @Input()
  selectedOptions: TaggedItem[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  search(query: string): void {
      this.searchString = query.toLowerCase()
      const regex = new RegExp(`^${query}`,'i')
      this.filteredOptions = query.length ? this.allOptions.filter( (option) =>  
        option.tagName.toLowerCase().includes(this.searchString, 0)
        && !this.selectedOptions.includes(option)
      ) : [];
   
  }

  selectOption(option: TaggedItem): void {
    this.selectedOptions.push(option);
    const index = this.filteredOptions.indexOf(option)
    this.filteredOptions.splice(index, 1)
  }

  unSelectOption(option: TaggedItem): void {
    this.filteredOptions.push(option)
    const index = this.selectedOptions.indexOf(option)
    this.selectedOptions.splice(index, 1)
  }



}
