import { Component, inject } from '@angular/core';
import { ScoreboardState } from '../stats/stats-store';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {
  private readonly store = inject(ScoreboardState)

  setId(id: number): void {
    this.store.inputId(id)
  }
}
