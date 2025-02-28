import { Component, inject } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';
import { MatDialog } from '@angular/material/dialog';
import { CarritoComprasComponent } from '../../components/carrito-compras/carrito-compras.component';

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
    { label: 'about', icon: 'person', url: './about' },
    { label: 'contacto', icon: 'contact_page', url: './contacto' },
  ];

  constructor(private dialog: MatDialog) { }

  openModal(): void {
    this.dialog.open(CarritoComprasComponent, {
      width: '400px',
      data: { shopping: true },
    });
  }

  get isSmallScreen() {
    return this.responsiveService.isSmallScreen();
  }
}
