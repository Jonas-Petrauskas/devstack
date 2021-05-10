import { Component, OnInit } from '@angular/core';

import { ApiClientService } from 'src/app/services/api-client.service';

import { DeveloperType } from 'src/app/interfaces/DeveloperType';
import { Technology } from 'src/app/interfaces/Technology';
import { ExperienceLevel } from 'src/app/interfaces/ExperienceLevel';
import { mockUser, User } from 'src/app/interfaces/User';
import { TaggedItem } from 'src/app/interfaces/TaggedItem';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {

  devTypes: DeveloperType[] = [];
  techs: Technology[] = [];
  experienceLevels: ExperienceLevel[] = [];
  sortBy: string = '';

  selectedDevType: DeveloperType = {tagName: '',name: 'name', id: 0};
  selectedTechs: Technology[] = [];
  selectedExp: ExperienceLevel = {tagName: '',name: 'name', id: 0};
  searchQuery: string = '';
  filteredUsers: User[] = [mockUser];
  selectedSkills: TaggedItem[] = [];


  constructor(private client: ApiClientService) { }

  ngOnInit(): void {
    this.getAllFields();
  }

  getAllFields(): void {
    this.client.getDeveloperTypes()
      .subscribe((devTypes) => this.devTypes = devTypes);
    this.client.getExperienceLevels()
      .subscribe((expLvls) => this.experienceLevels = expLvls);
    this.client.getTechnologies()
      .subscribe((techs) => this.techs = techs);
  }

  updateSelected(type: DeveloperType, tech: Technology[], xp: ExperienceLevel): void {
    this.selectedDevType = type;
    this.selectedTechs = tech;
    this.selectedExp = xp;
  }
  cLog():void {
    console.log(this.selectedSkills)
  }
  updateSelectedOpts(selectedOptions: TaggedItem[]): void {
    this.selectedSkills = [...selectedOptions]
  }
  updateSelectedType(selectedType: any): void {
    this.selectedDevType = selectedType;
  }
  updateSelectedExperience(selectedExps: any): void {
    this.selectedExp = selectedExps;
  }
}
