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
  
  constructor() { }

  ngOnInit(): void {
  }

  search(query: string): void {
      this.searchString = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`^${query}`,'i')
      this.filteredOptions = query.length ? this.allOptions.filter( (option) => 
        option.tagName.match(regex) ? true : false
      ) : [];
  }



}
