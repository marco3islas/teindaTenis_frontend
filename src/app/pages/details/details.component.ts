import { Component, OnInit, Input, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Tenis } from '../interfaces/tenis';
import { TenisService } from '../services/tenis-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CartService } from '../services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CarritoComprasComponent } from '../components/carrito-compras/carrito-compras.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  @Input() public tenis?: Tenis;

  esPantallaPequena = false;

  descripcion: string =
    'Los tenis, también conocidos como zapatillas deportivas, son un tipo de calzado diseñado principalmente para la práctica de deportes y actividades físicas. Su diseño se caracteriza por una suela flexible, generalmente de goma, que proporciona adherencia y amortiguación. La parte superior puede estar fabricada en diversos materiales, como cuero, lona o tejidos sintéticos, ofreciendo durabilidad y transpirabilidad. Además de su función deportiva, los tenis se han popularizado como calzado casual gracias a su comodidad y versatilidad. Hoy en día, existen una amplia variedad de modelos y estilos, adaptados a diferentes disciplinas deportivas y gustos personales.';

  like: number = 0;
  shopping: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tenisService: TenisService,
    private router: Router,
    private cartService: CartService,
    private dialog: MatDialog,
    @Inject(PLATFORM_ID) private plataformId: Object,
  ) { }

  ngOnInit(): void {

    if (isPlatformBrowser(this.plataformId)) {
      this.esPantallaPequena = window.innerWidth < 400;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.tenisService.getTenisDetail(id)))
      .subscribe((tenis) => {
        if (!tenis) return this.router.navigate(['home']);
        this.tenis = tenis;
        return;
      });
  }

  addToCart(): void {
    if (this.tenis) {
      this.cartService.addItem(this.tenis);
      alert(`${this.tenis?.titulo} ha sido agregado al carrito`);
    }
  }

  openModal(): void {
    this.dialog.open(CarritoComprasComponent, {
      width: '400px',
      data: { shopping: true },
    });
  }

  @HostListener('window-resize', ['$event'])
  onResize() {
    if (isPlatformBrowser(this.plataformId)) {
      this.esPantallaPequena = window.innerWidth < 400;
    }
  }

  goBack(): void {
    this.router.navigate(['home']);
  }

  likeCounter() {
    this.like += 1;
    console.log(this.like);
  }
}
