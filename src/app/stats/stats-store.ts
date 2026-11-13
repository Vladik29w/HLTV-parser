import { patchState, signalStore, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { ScoreboardDto } from './stats-dto';
import { inject } from '@angular/core';
import { StatsService } from './stats-service';

type ScoreboardState = {
  scoreboard: ScoreboardDto | null;
  isLoading: boolean;
};

const initialState: ScoreboardState = {
  scoreboard: null,
  isLoading: false,
}

export const ScoreboardState = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withProps(() => ({
    service: inject(StatsService)
  })),
  withMethods(
    (store) => ({
      updateScoreboard(scoreboard: ScoreboardDto): void {
        patchState(store, { scoreboard })
      },
      inputId(matchId: number): void {
        store.service.joinMatch(matchId)
        console.log(matchId)
      }
    })
  ),
  withHooks({
    onInit(store) {
      store.service.listen<ScoreboardDto>('scoreboard').subscribe((newScoreboard) => store.updateScoreboard(newScoreboard))
    }
  })
);
