import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Tenis } from '../interfaces/tenis';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Tenis[] = [];

  constructor(@Inject(PLATFORM_ID) private plataformId: object) {
    this.loadFromLocalStorage()

  }

loadFromLocalStorage(): void {
  if (isPlatformBrowser(this.plataformId)) {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      try {
        this.cartItems = JSON.parse(savedCartItems);
      } catch (e) {
        console.error('Error al parsear cartItems desde localStorage', e);
        localStorage.removeItem('cartItems'); // limpiar para evitar error persistente
        this.cartItems = []; // inicializar como vacío
      }
    }
  }
}

  addItem(item: Tenis): void {
    this.cartItems.push(item);
    this.saveToLocalStorage();
  }
  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.saveToLocalStorage()
  }
  getItems(): Tenis[] {
    return this.cartItems;
  }
  clearCart(): void {
    this.cartItems = [];
    this.saveToLocalStorage()
  }

  totalItems(): number {
    return this.cartItems.length;
  }

  totalAmount(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.precio * 1 || 0), 0); // reduce requiere una variable de acumulador (acc) que es el que representa las veces que se va a recorrer el array de acuerdo a su longitud, y el item que es el que representa cada elemento del array. Se establece una funcion de flecha que va a sumar el precio de cada item (el cual se multiplica por 1 para convertirlo a número) y se le asigna un valor inicial de 0.
  }

  saveToLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

}
