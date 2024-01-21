import { Component } from '@angular/core';

@Component({
  selector: 'contacto-component',
  standalone: true,
  imports: [],
  templateUrl: './contacto-component.component.html',
  styles: ``
})
export class ContactoComponent {
  public copiado: boolean = false;
  public emailContacto: string = 'manuelberganza.dev@gmail.com';

  copiarTexto(): void {
    navigator.clipboard.writeText(this.emailContacto)
        .then(() => {
          this.copiado = !this.copiado;
        })
        .catch(err => console.log('Error al copiar el texto: ', err));

    setTimeout(() => {
      this.copiado = false;
    }, 3000);
  }
}
