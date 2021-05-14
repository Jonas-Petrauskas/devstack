import { Country } from './Country';
import { DeveloperType } from './DeveloperType';
import { EmploymentHistory } from './EmploymentHistory';
import { ExperienceLevel } from './ExperienceLevel';
import { Technology } from './Technology';

export interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  min_salary: number,
  technologies: Technology[],
  employment_history: EmploymentHistory[],
  country: Country,
  eligible_countries: Country[],
  bio: string,
  developer_type: DeveloperType,
  experience_level: ExperienceLevel,
  linkedin: string,
  github: string,
  photo_path: string,



}

export const defaultUser: User = {
  id: -1,
  email: '',
  first_name: '',
  last_name: '',
  min_salary: 0,
  technologies: [],
  employment_history: [],
  country: { id: 1, name: "Argentina", is_european_union : false},
  eligible_countries: [],
  bio: '',
  developer_type: {id: -1, name: ''},
  experience_level: {name: '', id: -1},
  linkedin: '',
  github: ',',
  photo_path: '',
}

