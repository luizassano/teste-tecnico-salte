import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  totalItems: number = 0;
  totalPages: number = 0;
  loading: boolean = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.productService.getProducts(this.searchTerm, this.currentPage, this.pageSize)
      .subscribe({
        next: (response) => {
          this.products = response.products;
          this.totalItems = response.total;
          this.totalPages = response.totalPages;
          this.loading = false;
        },
        error: (error) => {
          console.error('Erro ao carregar produtos:', error);
          this.snackBar.open('Erro ao carregar produtos', 'Fechar', { duration: 3000 });
          this.loading = false;
        }
      });
  }

  onSearch(): void {
    this.currentPage = 1;
    this.loadProducts();
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadProducts();
  }

  viewProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.snackBar.open('Produto adicionado ao carrinho!', 'Fechar', { duration: 2000 });
  }

  getImageUrl(product: Product): string {
    return product.image || 'https://via.placeholder.com/300x200?text=Sem+Imagem';
  }

  isInCart(product: Product): boolean {
    return this.cartService.isInCart(product);
  }
}
