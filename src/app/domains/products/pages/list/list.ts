import { Component, signal, inject } from '@angular/core';
import { Product } from './../../components/product/product';
import { CommonModule } from '@angular/common';
import { ProductInterface } from '@shared/components/models/product.model'
import { Header } from '@shared/components/header/header';
import { Cart } from '@shared/services/cart';
import { ProductService } from '@shared/services/product';


@Component({
  selector: 'app-list',
  imports: [CommonModule, Product, Header],
  templateUrl: './list.html',
  standalone: true,
  styleUrl: './list.css'
})
export class List {

  products = signal<ProductInterface[]>([]);
  private cartService = inject(Cart);
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts()
      .subscribe({
        next: (products) => {
          this.products.set(products);
        },
        error: () => {

        }
      });
  }

  addToCart(product: ProductInterface) {
    this.cartService.addToCart(product);
  }
}
