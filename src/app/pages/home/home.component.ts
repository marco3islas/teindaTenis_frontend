import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TenisService } from '../services/tenis-service.service';
import { ResponsiveService } from '../services/responsive.service';
import { Tenis } from '../interfaces/tenis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  responsiveService = inject(ResponsiveService);
  public tenis: Tenis[] = [];
  public selectedItem?: Tenis;

  constructor(
    private teniService: TenisService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.teniService.getTenis().subscribe((tenis) => {
      this.tenis = tenis;
    });
  }
  itemOnClick(id: number): void {
    this.router.navigate(['tenis/details', id]);
  }
  get isSmallScreen() {
    return this.responsiveService.isSmallScreen();
  }
}

