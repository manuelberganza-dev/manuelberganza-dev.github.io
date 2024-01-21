import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'sobre-mi',
    component: SobreMiComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
