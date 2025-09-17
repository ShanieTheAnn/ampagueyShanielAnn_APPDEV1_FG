import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CART } from '../shared/cart-data';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  productId: number | null = null;
  product: any = null;
  searchTerm: string = '';

  products = [
    {id: 1, name: "Red Paint", price: 100, stock: 100},
    {id: 2, name: "Blue Paint", price: 100, stock: 0},
    {id: 3, name: "Green Paint", price: 100, stock: 58},
    {id: 4, name: "Invisible Paint", price: 10, stock: 75}
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === this.productId);
  }

  get filteredProducts() {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.products;
    }

    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addToCart(product: any) {
    const existing = CART.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      CART.push({ ...product, quantity: 1 });
    }
  }
}