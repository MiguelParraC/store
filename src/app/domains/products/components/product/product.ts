import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import { ProductInterface } from '@shared/components/models/product.model';
import { CommonModule } from '@angular/common';
import { Highlight } from '@shared/directives/highlight';

@Component({
  selector: 'app-product',
  imports: [CommonModule, Highlight],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  @Input({required: true}) product!: ProductInterface ;

  @Output() addToCart = new EventEmitter();


  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
