import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);
