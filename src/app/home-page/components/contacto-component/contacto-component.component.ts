import { Component } from '@angular/core';

@Component({
  selector: 'contacto-component',
  standalone: true,
  imports: [],
  templateUrl: './contacto-component.component.html',
  styles: ``
})
export class ContactoComponent {
  public emailContacto: string = 'manuelberganza.dev@gmail.com';

  copiarTexto(): void {
    navigator.clipboard.writeText(this.emailContacto)
        .then(() => console.log('Texto copiado en el portapeles'))
        .catch(err => console.log('Error al copiar el texto: ', err))
  }
}
