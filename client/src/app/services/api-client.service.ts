import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Country } from '../interfaces/Country';
import { DeveloperType } from '../interfaces/DeveloperType';
import { ExperienceLevel } from '../interfaces/ExperienceLevel';
import { Technology } from '../interfaces/Technology';
import { User } from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  baseUrl: string = 'http://localhost:3005';

  constructor(
    private http: HttpClient,
    // private otherService: OtherService, // * other services
  ) { }

  getCountries(): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.baseUrl}/countries`)
      .pipe(map((techs: Country[]) => techs.map(country => ({...country, tagName: country.name}))))
      .pipe(catchError(this.handleError<Country[]>([])));
  }

  getDeveloperTypes(): Observable<DeveloperType[]> {
    return this.http
      .get<DeveloperType[]>(`${this.baseUrl}/developer_types`)
      .pipe(map((devs: DeveloperType[]) => devs.map(dev => ({...dev, tagName: dev.name}))))
      .pipe(catchError(this.handleError<DeveloperType[]>([])));
  }

  getExperienceLevels(): Observable<ExperienceLevel[]> {
    return this.http
      .get<ExperienceLevel[]>(`${this.baseUrl}/experience_levels`)
      .pipe(map((levels: ExperienceLevel[]) => levels.map(level => ({...level, tagName: level.name}))))
      .pipe(catchError(this.handleError<ExperienceLevel[]>([])));
  }

  getTechnologies(): Observable<Technology[]> {
    return this.http
      .get<Technology[]>(`${this.baseUrl}/technologies`)
      .pipe(map((techs: Technology[]) => techs.map(tech => ({...tech, tagName: tech.name}))))
      .pipe(catchError(this.handleError<Technology[]>([])));
  }

  getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseUrl}/users`)
      .pipe(catchError(this.handleError<User[]>([])));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
