import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import { ProductInterface } from '@shared/components/models/product.model';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLinkWithHref],
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
