import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { DeveloperType } from '../interfaces/DeveloperType';
import { ExperienceLevel } from '../interfaces/ExperienceLevel';
import { Technology } from '../interfaces/Technology';


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  baseUrl: string = 'http://localhost:3005';

  constructor(
    private http: HttpClient,
    // private otherService: OtherService, // * other services
  ) { }

  getDeveloperTypes(): Observable<DeveloperType[]> {
    return this.http
      .get<DeveloperType[]>(`${this.baseUrl}/developer_types`)
      .pipe(catchError(this.handleError<DeveloperType[]>([])));
  }

  getExperienceLevels(): Observable<ExperienceLevel[]> {
    return this.http
      .get<ExperienceLevel[]>(`${this.baseUrl}/experience_levels`)
      .pipe(catchError(this.handleError<ExperienceLevel[]>([])));
  }

  getTechnologies(): Observable<Technology[]> {
    return this.http
      .get<Technology[]>(`${this.baseUrl}/technologies`)
      .pipe(catchError(this.handleError<Technology[]>([])));
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
