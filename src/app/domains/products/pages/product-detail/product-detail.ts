import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { ProductService } from '@shared/services/product';
import { ProductInterface } from '@shared/components/models/product.model';
import { Cart } from '@shared/services/cart';


@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  @Input() id?: string;
  product = signal<ProductInterface | null>(null);
  cover = signal('');
  private productService = inject(ProductService);
  private cart = inject(Cart);


  ngOnInit(){
    if(this.id){
      this.productService.getOne(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if(product.images.length > 0){
            this.cover.set(product.images[0]);
          }
        }
      })
    }
  }

  addToCart(){
    const product = this.product();
    if (product){
      this.cart.addToCart(product);
    }
  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }
}
