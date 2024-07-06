import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeaguepediaSearchService} from "./services/leaguepedia-search.service";
import {AsyncPipe, NgFor} from "@angular/common";

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
  champions: Array<Champion> = [];

  constructor(private leagupediaSearchService: LeaguepediaSearchService) {
  }

  search(query: string) {
    this.leagupediaSearchService.search(query)
      .subscribe((champions) => this.champions = champions)
  }

}
