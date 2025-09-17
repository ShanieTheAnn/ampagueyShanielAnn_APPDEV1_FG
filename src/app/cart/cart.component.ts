import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
products = [
    {id: 1, name: "Red Paint", price: 100, stock: 100},
    {id: 2, name: "Blue Paint", price: 100, stock: 0},
    {id: 3, name: "Green Paint", price: 100, stock: 58},
    {id: 4, name: "Invisible Paint", price: 10, stock: 75}
  ];

}
