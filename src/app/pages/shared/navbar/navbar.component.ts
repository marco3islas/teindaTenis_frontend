import { Component, inject, ViewChild, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { filter, Subscription } from 'rxjs';
import { ResponsiveService } from '../../services/responsive.service';
import { MatDialog } from '@angular/material/dialog';
import { CarritoComprasComponent } from '../../components/carrito-compras/carrito-compras.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnDestroy {
  @ViewChild('drawer') drawer!: MatDrawer;
  private routerSubscription: Subscription;
  showFiller = false;

  responsiveService = inject(ResponsiveService);

  public navbarItems = [
    { label: 'home', icon: 'home', url: './home' },
    { label: 'about', icon: 'person', url: './about' },
    { label: 'contacto', icon: 'contact_page', url: './contacto' },
  ];

  constructor(private dialog: MatDialog, private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.drawer?.opened) {
          this.drawer.close();
        }
      });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

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
