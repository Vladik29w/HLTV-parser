import { Routes } from '@angular/router';
import { Stats } from './stats/stats';
import { Main } from './main/main';

export const routes: Routes = [
   { path: '', component: Main },
   { path: 'stats', component: Stats }
];
