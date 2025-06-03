import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/product.model';
import { CheckoutModalComponent } from '../checkout-modal/checkout-modal.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    FormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'subtotal', 'actions'];
  private cartSubscription: Subscription;
  total: number = 0;

  constructor(
    private cartService: CartService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.cartSubscription = this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.total = this.getCartTotal();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  getCartTotal(): number {
    return this.cartService.getCartTotal();
  }

  checkout(): void {
    this.dialog.open(CheckoutModalComponent, {
      width: '450px',
      maxWidth: '90vw',
      maxHeight: '90vh'
    });
  }

  continueShopping(): void {
    this.router.navigate(['/products']);
  }

  getImageUrl(item: CartItem): string {
    return item.product.image || 'https://via.placeholder.com/150x150?text=Sem+Imagem';
  }

  decreaseQuantity(productId: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item && item.quantity > 1) {
      this.updateQuantity(productId, item.quantity - 1);
    }
  }

  increaseQuantity(productId: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      this.updateQuantity(productId, item.quantity + 1);
    }
  }

  getItemTotal(item: CartItem): number {
    return item.product.price * item.quantity;
  }

  removeItem(productId: number): void {
    this.removeFromCart(productId);
  }
}
