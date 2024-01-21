import { Component } from '@angular/core';
import { Proyectos } from '../../interfaces/proyectos.interface';

@Component({
  selector: 'proyectos-component',
  standalone: true,
  imports: [],
  templateUrl: './proyectos-component.component.html',
  styles: ``
})
export class ProyectosComponent {

  public cards: Proyectos[] = [
      {
        imagen: 'placeholder',
        titulo: 'Proyecto #1',
        descripcion: 'Anim do et nulla enim ex mollit cupidatat velit ipsum.',
        tecnologias: ['Java', 'Spring Boot', 'Tailwind', 'Angular'],
      },
      {
        imagen: 'placeholder',
        titulo: 'Proyecto #2',
        descripcion: 'Anim do et nulla enim ex mollit cupidatat velit ipsum.',
        tecnologias: ['Java', 'Spring Boot', 'Angular'],
      },
      {
        imagen: 'placeholder',
        titulo: 'Proyecto #3',
        descripcion: 'Anim do et nulla enim ex mollit cupidatat velit ipsum.',
        tecnologias: ['Java', 'Spring Boot', 'MySQL', 'Angular'],
      },
  ];

}
