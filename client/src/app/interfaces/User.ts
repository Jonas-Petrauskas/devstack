import { Country } from './Country'
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

}

export const mockUser: User = {
  id: 1,
  email: 'hi@gmail.com',
  first_name: 'Bernie',
  last_name: 'LastName',
  min_salary: 40,
  technologies: [],
  employment_history: [],
  country: {id: 1, name: 'ESSPPAANNNYAAA'},
  eligible_countries: [],
  bio: 'I work late',
  developer_type: {id: 1, type: 'FrontEnd', tagName: 'hi'},
  experience_level: {tagName:'experience level', level:'Beginer', id: 1 },
}