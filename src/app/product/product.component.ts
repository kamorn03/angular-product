// src/app/product/product.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  title = 'Products';
  selectedItemId!: number;

  onSelectedItemChanged(itemId: number) {
    this.selectedItemId = itemId;
  }
}
