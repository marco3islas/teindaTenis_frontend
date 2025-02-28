import { Component, OnInit } from '@angular/core';
import { Tenis } from '../../interfaces/tenis';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.css',
})
export class CarritoComprasComponent implements OnInit {
  cartItems: Tenis[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
  }

  totalItems(): number {
    return this.cartService.totalItems();
  }

  totalAmount(): number {
    return this.cartService.totalAmount();
  }

}
