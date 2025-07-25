import { Component, Input, signal, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../../services/cart';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLinkWithHref],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  hideSideMenu = signal(true);

  private cartService = inject(Cart);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu() {
    this.hideSideMenu.update(prevstate => !prevstate);
  }

}
