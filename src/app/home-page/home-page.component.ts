import { Component } from '@angular/core';
import { HeroComponent } from './components/hero-component/hero-component.component';
import { ExperienciaComponent } from './components/experiencia-component/experiencia-component.component';
import { ProyectosComponent } from './components/proyectos-component/proyectos-component.component';
import { ContactoComponent } from './components/contacto-component/contacto-component.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    HeroComponent,
    ExperienciaComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

}
