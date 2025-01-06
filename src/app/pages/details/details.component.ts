import { Component, OnInit } from '@angular/core';
import { Tenis } from '../interfaces/tenis';
import { TenisService } from '../services/tenis-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  public tenis?: Tenis;

  descripcion: string =
    'Los tenis, también conocidos como zapatillas deportivas, son un tipo de calzado diseñado principalmente para la práctica de deportes y actividades físicas. Su diseño se caracteriza por una suela flexible, generalmente de goma, que proporciona adherencia y amortiguación. La parte superior puede estar fabricada en diversos materiales, como cuero, lona o tejidos sintéticos, ofreciendo durabilidad y transpirabilidad. Además de su función deportiva, los tenis se han popularizado como calzado casual gracias a su comodidad y versatilidad. Hoy en día, existen una amplia variedad de modelos y estilos, adaptados a diferentes disciplinas deportivas y gustos personales.';

  like: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tenisService: TenisService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.tenisService.getTenisDetail(id)))
      .subscribe((tenis) => {
        if (!tenis) return this.router.navigate(['home']);

        this.tenis = tenis;
        console.log(tenis);
        return;
      });
  }

  goBack(): void {
    this.router.navigate(['home']);
  }

  likeCounter() {
    this.like += 1;
    console.log(this.like);
  }
}
