import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule
  ],
  template: `
    <mat-toolbar color="primary" class="header-toolbar">
      <a routerLink="/" class="logo">
        <span>Loja de Produtos</span>
      </a>
      <span class="spacer"></span>
      <nav class="nav-links">
        <button mat-button routerLink="/products">
          <mat-icon>shopping_basket</mat-icon>
          Produtos
        </button>
        <button mat-button routerLink="/cart" [matBadge]="cartItemsCount" matBadgeColor="warn">
          <mat-icon>shopping_cart</mat-icon>
          Carrinho
        </button>
      </nav>
      <button mat-icon-button [matMenuTriggerFor]="menu" class="menu-button">
        <mat-icon>menu</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item routerLink="/products">
          <mat-icon>shopping_basket</mat-icon>
          Produtos
        </button>
        <button mat-menu-item routerLink="/cart">
          <mat-icon>shopping_cart</mat-icon>
          Carrinho
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    .header-toolbar {
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .logo {
      text-decoration: none;
      color: white;
      font-size: 1.2rem;
      font-weight: 500;
    }
    .spacer {
      flex: 1 1 auto;
    }
    .nav-links {
      display: flex;
      gap: 8px;
    }
    .menu-button {
      display: none;
    }
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      .menu-button {
        display: inline-flex;
      }
    }
    button {
      margin-left: 8px;
    }
    mat-icon {
      margin-right: 4px;
    }
  `]
})
export class HeaderComponent {
  cartItemsCount = 0;
  private cartSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.cartSubscription = this.cartService.cart$.subscribe(() => {
      this.cartItemsCount = this.cartService.getCartItemsCount();
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
