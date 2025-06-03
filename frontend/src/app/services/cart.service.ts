import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, CartItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartItems.asObservable();

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cartItems.next(JSON.parse(savedCart));
      }
    }
  }

  private saveCart(items: CartItem[]) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems.asObservable();
  }

  addToCart(product: Product, quantity: number = 1) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
      this.cartItems.next([...currentItems]);
    } else {
      this.cartItems.next([...currentItems, { product, quantity }]);
    }
    this.saveCart(this.cartItems.value);
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems.value;
    const updatedItems = currentItems.filter(item => item.product.id !== productId);
    this.cartItems.next(updatedItems);
    this.saveCart(updatedItems);
  }

  updateQuantity(productId: number, quantity: number) {
    const currentItems = this.cartItems.value;
    const item = currentItems.find(item => item.product.id === productId);
    
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.cartItems.next([...currentItems]);
        this.saveCart(currentItems);
      }
    }
  }

  isInCart(product: Product): boolean {
    return this.cartItems.value.some(item => item.product.id === product.id);
  }

  clearCart() {
    this.cartItems.next([]);
    this.saveCart([]);
  }

  getCartTotal(): number {
    return this.cartItems.value.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  getCartItemsCount(): number {
    return this.cartItems.value.reduce((count, item) => count + item.quantity, 0);
  }
} 