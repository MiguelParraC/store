import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductInterface } from '../components/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor(){  }
  
  getProducts(){
    return this.http.get<ProductInterface[]>('https://api.escuelajs.co/api/v1/products');
  }

  getOne(id: string){
    return this.http.get<ProductInterface>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
  
}
