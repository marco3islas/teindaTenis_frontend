import {Injectable } from '@angular/core';
import { Tenis } from '../interfaces/tenis';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Tenis[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage(): void {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      this.cartItems = JSON.parse(savedCartItems);
    }
  }


  addItem(item: Tenis): void {
    this.cartItems.push(item);
  }
  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }
  getItems(): Tenis[] {
    return this.cartItems;
  }
  clearCart(): void {
    this.cartItems = [];
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
