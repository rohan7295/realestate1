// src/app/cart.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor(private http: HttpClient) { }

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }

  updateCart(items: any[]) {
    this.cartItems = items;
  }

  getCartCount() {
    return this.cartItems.length;
  }


}

