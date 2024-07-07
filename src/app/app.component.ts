import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeaguepediaSearchService} from "./services/leaguepedia-search.service";
import {AsyncPipe, NgFor, NgIf, NgOptimizedImage} from "@angular/common";
import {Observable, Subject} from "rxjs";

export interface Champion {
  id: number;
  name: string;
  faction: string;
  imageUri: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, NgFor, NgIf, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leaguepedia-client';
  champions$ = new Observable<Array<Champion>>();
  query$ = new Subject<string>();
  selectedChampion?: Champion;

  constructor(private leagupediaSearchService: LeaguepediaSearchService) {
    this.champions$ = this.leagupediaSearchService.search(this.query$);
  }

  onSelect(champion: Champion): void {
    this.selectedChampion = champion;
  }

  identityChampion(index: number, champion: Champion) {
    return champion.id;
  }
}
