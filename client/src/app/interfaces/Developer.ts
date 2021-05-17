import { Country } from './Country';
import { DeveloperType } from './DeveloperType';
import { EducationHistory } from './EducationHistory';
import { EmploymentHistory } from './EmploymentHistory';
import { ExperienceLevel } from './ExperienceLevel';
import { Technology } from './Technology';

export interface Developer {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  min_salary: number,
  technologies: Technology[],
  education_history: EducationHistory[],
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

export const defaultDeveloper: Developer = {
  id: -1,
  email: '',
  first_name: '',
  last_name: '',
  min_salary: 0,
  technologies: [],
  education_history: [],
  employment_history: [],
  country: { id: 1, name: "Argentina", is_european_union : false},
  eligible_countries: [],
  bio: '',
  developer_type: {id: -1, name: ''},
  experience_level: {name: '', id: -1},
  linkedin: '',
  github: ',',
  photo_path: 'https://media-exp1.licdn.com/dms/image/C5603AQG6T8basbHZMg/profile-displayphoto-shrink_100_100/0/1567594283688?e=1626307200&v=beta&t=-2qovDNl8h4yKrmQB0yWCq2Eqf30yE_JvHNG0RXzNQ0',
}
