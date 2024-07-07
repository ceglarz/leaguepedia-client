import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeaguepediaSearchService} from "./services/leaguepedia-search.service";
import {AsyncPipe, NgFor} from "@angular/common";
import {debounceTime, Observable, Subject} from "rxjs";

export interface Champion {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leaguepedia-client';
  champions$ = new Observable<Array<Champion>>();
  query$ = new Subject<string>();

  constructor(private leagupediaSearchService: LeaguepediaSearchService) {
    this.query$
      .pipe(debounceTime(350))
      .subscribe(query => this.search(query));
  }

  search(query: string) {
    this.champions$ = this.leagupediaSearchService.search(query);
  }

  identityChampion(index: number, champion: Champion) {
    return champion.id;
  }
}
