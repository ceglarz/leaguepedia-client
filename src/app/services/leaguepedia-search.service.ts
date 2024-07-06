import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Champion} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class LeaguepediaSearchService {

  API_PATH = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  search(name: string): Observable<Array<Champion>> {
    let params = new HttpParams({fromObject: {name}});
    return this.http.get<{results: Array<Champion>}>(this.API_PATH, {params})
      .pipe(
        map(response => response.results)
      );
  }
}
