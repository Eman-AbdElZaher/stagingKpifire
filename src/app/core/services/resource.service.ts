import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { config } from '../../../environments/config';

@Injectable({
  providedIn: 'root',
})
export abstract class ResourceService<T> {
  constructor(private httpClient: HttpClient) {}

  abstract getResourceUrl(): string;
  private readonly APIUrl = config.APIURL + this.getResourceUrl();

  getList(): Observable<T[]> {
    // page: number, count: number
    // let params = new HttpParams()
    //   .set('page', page.toString())
    //   .set('count', count.toString());
    // console.log(`Api_Url:${this.APIUrl}`);

    return this.httpClient
      .get<T[]>(`${this.APIUrl}`)
      .pipe(catchError(this.handleError));
  }

  get(id: string | number): Observable<T> {
    return this.httpClient
      .get<T>(`${this.APIUrl}}/${id}`)
      .pipe(catchError(this.handleError));
  }

  add(resource: T): Observable<any> {
    return this.httpClient
      .post(`${this.APIUrl}}`, resource)
      .pipe(catchError(this.handleError));
  }

  delete(id: string | number): Observable<any> {
    return this.httpClient
      .delete(`${this.APIUrl}}/${id}`)
      .pipe(catchError(this.handleError));
  }

  update(resource: T) {
    return this.httpClient
      .put(`${this.APIUrl}}`, resource)
      .pipe(catchError(this.handleError));
  }
  // getGoalListCount(): number {
  //   return this.httpClient.get(`/${this.APIUrl}}`).length;
  // }

  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError('Something wrong happened');
  }
}
