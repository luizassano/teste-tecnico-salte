import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-checkout-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="checkout-modal">
      <mat-icon class="success-icon">check_circle</mat-icon>
      
      <h2>Pedido Finalizado</h2>
      
      <div class="message">
        <p>é uma aplicacao teste.</p>
      </div>

      <button mat-raised-button color="primary" (click)="closeModal()">
        Fechar
      </button>
    </div>
  `,
  styles: [`
    .checkout-modal {
      padding: 24px;
      text-align: center;
      max-width: 400px;
    }

    .success-icon {
      font-size: 48px;
      height: 48px;
      width: 48px;
      color: #4CAF50;
      margin-bottom: 16px;
    }

    h2 {
      color: #333;
      margin-bottom: 20px;
      font-size: 24px;
    }

    .message {
      margin-bottom: 24px;
      
      p {
        margin-bottom: 12px;
        line-height: 1.5;
        color: #666;
      }
    }

    .tech-stack {
      background: #f5f5f5;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 24px;
      text-align: left;

      p {
        margin-bottom: 8px;
        color: #333;
        font-weight: 500;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin: 8px 0;
          color: #666;
        }
      }
    }

    button {
      min-width: 150px;
    }
  `]
})
export class CheckoutModalComponent {
  constructor(private dialogRef: MatDialogRef<CheckoutModalComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }
} 