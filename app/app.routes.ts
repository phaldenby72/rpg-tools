import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {DayLengthComponent} from './day-length';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'daylength', component: DayLengthComponent}
];

export const routing = RouterModule.forRoot(routes);
