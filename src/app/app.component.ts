import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsyncPipe} from "@angular/common";

export interface Champion {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leaguepedia-client';

}
