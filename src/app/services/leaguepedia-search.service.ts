import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap} from "rxjs";
import {Champion} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class LeaguepediaSearchService {

  API_PATH = 'http://localhost:8080/api/champions-complex';

  constructor(private http: HttpClient) { }

  search(query$: Subject<string>) {
    return query$
      .pipe(
        debounceTime(350),
        distinctUntilChanged(),
        switchMap(query => this.searchChampion(query)));
  }

  private searchChampion(query: string): Observable<Array<Champion>> {
    let params = new HttpParams({fromObject: {query}});
    return this.http.get(this.API_PATH, {params})
      .pipe(
        map(response => response as Array<Champion>)
      );
  }
}
