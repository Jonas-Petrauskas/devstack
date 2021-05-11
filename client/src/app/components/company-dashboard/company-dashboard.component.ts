import { Component, OnInit } from '@angular/core';

import { ApiClientService } from 'src/app/services/api-client.service';

import { DeveloperType } from 'src/app/interfaces/DeveloperType';
import { Technology } from 'src/app/interfaces/Technology';
import { ExperienceLevel } from 'src/app/interfaces/ExperienceLevel';
import { User, defaultUser } from 'src/app/interfaces/User';
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

  selectedDevType: DeveloperType = {name: 'name', id: 0};
  selectedTechs: Technology[] = [];
  selectedExp: ExperienceLevel = {name: 'name', id: 0};
  searchQuery: string = '';
  filteredUsers: User[] = [];
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
    this.client.getAllUsers()
    .subscribe((users) => this.filteredUsers = users);
  }

  
  searchUsers():void {
    let comaSeperated: string = '';
    this.selectedSkills.forEach((tech) => comaSeperated+= tech.id+',')
    comaSeperated= comaSeperated.substr(0, comaSeperated.length-1);
    this.searchQuery = `technologies=${comaSeperated};developer_type=${this.selectedDevType.id};experience_level=${this.selectedExp.id}`
    
    this.client.getFilteredUsers(this.searchQuery)
      .subscribe((users) => {
        this.filteredUsers = users
        console.log(users)
      })
      console.log(this.searchQuery)
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
