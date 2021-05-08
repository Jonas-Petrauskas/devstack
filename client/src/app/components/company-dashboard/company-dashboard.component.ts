import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {
  devTypes: {name: string, id: number}[] = [];
  techs: {name: string, id: number}[] = [];
  experienceLevel: {name: string, id: number}[] = [];
  sortBy: {name: string, id: number}[] = [];

  selectedDevType: {name: string, id: number} = {name: 'name', id: 0};
  selectedTechs: {name: string, id: number}[] = [];
  selectedExp: {name: string, id: number} = {name: 'name', id: 0};
  searchQuery: string = '';


  constructor() { }

  ngOnInit(): void {
    this.getAllFeilds();
  }

  getAllFeilds(): void {
    // TODO  api fetch dev types techs and experience levels

    // TODO update  variables for type/tech/exper


  }

  updateSelected(type: {name: string, id: number}, tech: {name: string, id: number}[], xp: {name: string, id: number}): void {
    this.selectedDevType = type;
    this.selectedTechs = tech;
    this.selectedExp = xp;

  }



}
