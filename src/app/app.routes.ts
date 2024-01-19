import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

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
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
