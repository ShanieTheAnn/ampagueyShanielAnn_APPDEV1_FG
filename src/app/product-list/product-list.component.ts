import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit {
  productId: number | null = null;
  product: any = null;

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
}