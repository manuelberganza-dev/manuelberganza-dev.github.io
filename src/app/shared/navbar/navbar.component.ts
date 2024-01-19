import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  public isMenuOpen: boolean = false;

  toogleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
