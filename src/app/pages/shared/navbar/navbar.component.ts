import { Component, inject } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  showFiller = false;

  responsiveService = inject(ResponsiveService);

  public navbarItems = [
    { label: 'home', icon: 'home', url: './home' },
    { label: 'store', icon: 'store', url: './tienda' },
    { label: 'about', icon: 'person', url: './about' },
    { label: 'contacto', icon: 'contact_page', url: './contacto' },
  ];

  get isSmallScreen() {
    return this.responsiveService.isSmallScreen();
  }
}
