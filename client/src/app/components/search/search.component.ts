import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchString: string = '';
  @Input()
  placeString: string = '';
  options: {name: string, id: number}[] = [{name: '', id: 1}];
  optionsToRender: {name: string, id: number}[] = [{name: '', id: 1}];
  
  constructor() { }

  ngOnInit(): void {
  }

  search(query: string): void {
      this.searchString = query;
      const regex = new RegExp(`^${query}`)
      this.optionsToRender = query.length ? this.options.filter( (option) => 
        option.name.match(regex) ? true : false
      ) : [];
  }



}
