import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
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
  withMethods(
    (store) => ({
      updateScoreboard(scoreboard: ScoreboardDto): void {
        patchState(store, { scoreboard })
      }
    })
  ),
  withHooks({
    onInit(store) {
      const service = inject(StatsService)
      service.joinMatch(2400099);
      service.listen<ScoreboardDto>('scoreboard').subscribe((newScoreboard) => store.updateScoreboard(newScoreboard))
    }
  })
);
