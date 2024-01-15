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
export class ProductComponent implements OnInit {
  product: Product | undefined;
  private routeSubscription: Subscription;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.routeSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const productId = Number(params['id']);
      this.product = this.productService.getProductById(productId);
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
