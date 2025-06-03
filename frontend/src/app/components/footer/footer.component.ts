import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  template: `
    <footer>
      <div class="footer-content">
        <p>&copy; Feito por Luiz Assano - 2025</p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #f5f5f5;
      padding: 20px 0;
      margin-top: auto;
      width: 100%;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      text-align: center;
      color: #666;
    }

    @media (max-width: 768px) {
      footer {
        padding: 15px 0;
      }

      .footer-content {
        padding: 0 15px;
      }
    }
  `]
})
export class FooterComponent {} 