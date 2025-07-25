import { computed, Injectable, signal } from '@angular/core';
import { ProductInterface } from '../components/models/product.model';
import { stat } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  cart = signal<ProductInterface[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });

  constructor (){};
  
  addToCart(product: ProductInterface) {
    this.cart.update(state =>  [...state, product]);
  }

}
