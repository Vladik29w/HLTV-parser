import { Component, inject, OnInit } from '@angular/core';
import { ScoreboardState } from './stats-store';
import { ScoreboardDto } from './stats-dto';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-stats',
  styleUrl: './stats.css',
  templateUrl: './stats.html',
})

export class Stats {
  public store = inject(ScoreboardState)
};
